import { baseUrl } from "../app/shared/baseUrl"

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        }
    })
}
//functionality:
//This custom utility function takes an argument of an array. It maps over that array, pulling out each array item in turn into the item parameter. It returns a new array of objects, using the spread operator to prepend each image property with the baseUrl.