export function getImageUrl(path: string, format: 'overview' | 'big' | 'content') {
	console.log('image: ', path)
	const edits = 'c_crop,f_auto'
	const overviewFormat = `w_500,h_500,${edits}`
	const bigFormat = `w_960,h_500,${edits}`
	const contentFormat = `w_800,h_600, ${edits}`

	const imageFormat = format === 'overview' ? overviewFormat : bigFormat
	let returnValue = ''
	if (path?.includes('http')) {
		returnValue = `https://res.cloudinary.com/raymons/image/fetch/${imageFormat}/${path}`
	} else if (path?.startsWith('images/')) {
		returnValue = `https://res.cloudinary.com/raymons/image/upload/${imageFormat}/devbyrayray/blog/${path.replace(
			'images/',
			''
		)}`
	}
	console.log('returnValue: ', returnValue)

	return returnValue
}
