export async function getTopicPosts(topic: string, limit?: number, contentDir: string = 'blog') {
	const req = await queryContent(contentDir)
		.where({ $or: [{ tags: { $contains: topic } }, { categories: { $contains: topic } }] })
		.sort({ date: -1 })

	if (limit > 0) {
		req.limit(limit)
	}

	return req.find()
}