export function getImageUrl(path: string, format: 'overview' | 'big') {
	console.log('image: ', path)
	const overviewFormat = 'w_400,h_250';
	const bigFormat = 'w_710,h_400';
	
	const imageFormat = format === 'overview' ? overviewFormat : bigFormat;
	let returnValue = ''
	if (path?.includes('http')) {
		returnValue = `https://res.cloudinary.com/raymons/image/fetch/${imageFormat}/${path}`
	} else if (path?.startsWith('images/')) {
		returnValue = `https://res.cloudinary.com/raymons/image/upload/${imageFormat}/devbyrayray/blog/${path.replace('images/', '')}`
	}
	console.log('returnValue: ', returnValue)

	return returnValue
}