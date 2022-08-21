import { useRandom } from '../helpers'
const MY_KEY = 'wULqw2DwqCCIAnHVph80DcuwgOfGg7Iuxj_W5_sSask'

export const getUnsplashPhotos = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${useRandom(10)}&client_id=${MY_KEY}`
    );
    const data = await response.json()
    return data
}