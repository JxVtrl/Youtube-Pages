import { themeList } from "../data";
import { useRandom } from '../helpers'

const MY_KEY = 'wULqw2DwqCCIAnHVph80DcuwgOfGg7Iuxj_W5_sSask'

export const getQueryPhotos = async () => {
    const num = useRandom(themeList.list.length)
    const itemsNum = 35
    const response = await fetch(
        `https://api.unsplash.com/search/collections?page=1&per_page=${itemsNum}&query=${themeList.list[num]}&client_id=${MY_KEY}`);
    const data = await response.json()
    return data.results
}