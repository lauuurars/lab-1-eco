import { useEffect, useState } from "react";
import type { Anime } from "../types/AnimeType";
import { getAnimes } from "../services/animeService";
import { AnimeCard } from "../components/AnimeCard";

export default function Home() {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getAnimes();
                setAnimeList(data.data);
            } catch (err) {
                console.error(err);
                throw new Error("Error cargando animes :c");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="flex justify-center text-4xl font-bold mb-6">Search an Anime!!!</h1>

            {loading && (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-spinner h-12 w-12 text-info"></span>
                </div>
            )}
            {error && <p>{error}</p>}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {animeList.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </div>
    )
}