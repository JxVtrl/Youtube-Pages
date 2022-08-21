export const formatDate = (date: any) => {
    return `${new Date(date).getFullYear()}.${new Date(date).getMonth()}.${new Date(date).getDay()}`
}