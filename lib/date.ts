export function formatDate(input: string) {
    console.log('dateInput: ', input);
    if (!input) return input;
    const [date] = input?.includes('T') ? input?.split('T') : input;
    return date ? new Intl.DateTimeFormat('us-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date)) : input
} 