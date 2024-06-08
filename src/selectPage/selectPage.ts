export type TPage = 'market' | 'about' | 'favorites'

export const selectPage = (type: TPage, getPage: string) => {
    let select = getPage
    switch (type) {
        case "market": 
            select = getPage
            break
        case "market":
            select = getPage
            break
        case "favorites":
            select = getPage
            break
        default:
            select = getPage
    }
    return select
}