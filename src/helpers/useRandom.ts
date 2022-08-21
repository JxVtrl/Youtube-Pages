export const useRandom = (size: number) => {
    const number = Math.floor(Math.random() * size+1)
    return number
}