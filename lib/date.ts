export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('nl-NL').format(new Date(date))
} 