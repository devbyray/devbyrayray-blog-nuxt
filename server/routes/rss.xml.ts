import { serverQueryContent } from '#content/server'
import RSS from 'rss'

export default defineEventHandler(async (event) => {
    
    const feed = new RSS({
      title: 'Dev By RayRay',
      site_url: 'https://byrayray.dev',
      feed_url: `https://byrayray.dev/rss.xml`,
    })
    
    const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
    const blogPosts = docs.filter((doc) => doc?._path?.includes('/posts'))
    
    for (const doc of blogPosts) {
      feed.item({
        title: doc.title ?? '-',
        url: `https://byrayray.dev${doc._path}`,
        date: doc.date,
        description: doc.description,
      })
    }
    
    const feedString = feed.xml({ indent: true })
    event.res.setHeader('content-type', 'text/xml')
    event.res.end(feedString)
    
})
