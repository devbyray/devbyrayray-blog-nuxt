export function formatDate(input: string) {
    const [date] = input?.split('T');
    return new Intl.DateTimeFormat('us-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date))
} 