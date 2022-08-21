export const getPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json()
    // console.log(data)
    return data
}
