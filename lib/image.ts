export function getImageUrl(path, format: 'overview' | 'big') {
	const overviewFormat = 'w_400,h_250';
	const bigFormat = 'w_710,h_400';

	const imageFormat = format === 'overview' ? overviewFormat : bigFormat;
	if (path?.includes('http')) {
		return `https://res.cloudinary.com/raymons/image/fetch/${imageFormat}/${path}`
	}
	return `https://res.cloudinary.com/raymons/image/upload/${imageFormat}/${path}`
}