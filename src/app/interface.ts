
interface regular {
    small: string,
    medium: string,
    large: string
}
interface trending {
    small: string,
    large: string
}
export interface MediaData {
        title: string;
        thumbnail:{
            trending?: trending,
            regular: regular
        },
        year: number,
        category:string,
        rating: string,
        isBookmarked: boolean,
        isTrending: boolean,
      }
