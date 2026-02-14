import type { AnimeResponse } from "../types/AnimeType";

export const getAnimes = async (): Promise<AnimeResponse> => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=15");

    if (!response.ok) {
        throw new Error("Error obteniendo animes :c");
    }

    return response.json();
};