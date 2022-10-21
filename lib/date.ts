export function formatDate(input: string) {
	if (!input) return input
	const date = input?.includes('T') ? input?.split('T')[0] : input
	return date
		? new Intl.DateTimeFormat('us-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date))
		: input
}
