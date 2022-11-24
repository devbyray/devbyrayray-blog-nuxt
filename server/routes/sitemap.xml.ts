import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default defineEventHandler(async event => {
	// const feed = new RSS({
	// 	title: 'Dev By RayRay',
	// 	site_url: 'https://byrayray.dev',
	// 	feed_url: `https://byrayray.dev/rss.xml`
	// })

	const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
	const blogPosts = docs.filter(doc => doc?._path?.includes('/posts'))

	const links = []

	for (const doc of blogPosts) {
		// feed.item({
		// 	title: doc.title ?? '-',
		// 	url: `https://byrayray.dev${doc._path}`,
		// 	date: doc.date,
		// 	description: doc.description
		// })

		links.push({ url: doc._path, lastmod: doc.date })
	}

	// An array with your links
	// const links = [{ url: '/page-1/', changefreq: 'daily', priority: 0.3 }]

	// Create a stream to write to
	const stream = new SitemapStream({ hostname: 'https://byrayray.dev' })

	// Return a promise that resolves with your XML string
	const feed = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString())

	// const feedString = feed.xml({ indent: true })
	event.res.setHeader('content-type', 'text/xml')
	event.res.end(feed)
})
