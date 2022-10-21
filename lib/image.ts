export function getImageUrl(path: string, format: 'overview' | 'big' | 'content') {
	const edits = 'c_crop,f_auto'
	const overviewFormat = `w_500,h_500,${edits}`
	const bigFormat = `w_960,h_500,${edits}`
	const contentFormat = `w_800,h_600, ${edits}`

	let imageFormat = ''

	switch (format) {
		case 'overview':
			imageFormat = overviewFormat
			break;
		case 'big':
			imageFormat = bigFormat
			break;
	
		default:
			imageFormat = contentFormat
			break;
	}

	let returnValue = ''
	if (path?.includes('http')) {
		returnValue = `https://res.cloudinary.com/raymons/image/fetch/${imageFormat}/${path}`
	} else if (path?.startsWith('images/')) {
		returnValue = `https://res.cloudinary.com/raymons/image/upload/${imageFormat}/devbyrayray/blog/${path.replace(
			'images/',
			''
		)}`
	}

	return returnValue
}
