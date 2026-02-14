export type Anime = {
    mal_id: number;
    title: string;
    sypnosis: string | null
    score: number | null
    images: {
        jpg: {
            image_url: string;
        }
    }
}

export type AnimeResponse = {
    data: Anime[];
}