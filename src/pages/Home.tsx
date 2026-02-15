import { useEffect, useState } from "react";
import type { Anime } from "../types/AnimeType";
import { getAnimes } from "../services/animeService";
import { AnimeCard } from "../components/AnimeCard";
import { Filters } from "../components/Filters";

export default function Home() {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        name: "",
        type: "",
        sort: "desc",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getAnimes(filters);

                const sortedData = [...data].sort((a, b) => {
                    if (filters.sort === "desc") {
                        return (b.score ?? 0) - (a.score ?? 0);
                    } else {
                        return (a.score ?? 0) - (b.score ?? 0);
                    }
                });

                setAnimeList(sortedData);
            } catch (err) {
                console.log(err)
                setError("Error, revisa tu internet! (ᗒᗣᗕ)՞");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [filters]);

    const isEmpty =
        !loading &&
        !error &&
        animeList.length === 0 &&
        filters.name !== "";


    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <Filters onFilterChange={setFilters} />
            <h1 className="flex justify-center text-4xl font-bold mb-10 mt-8">Anime Store ꉂ(˵˃ ᗜ ˂˵)!!</h1>

            {loading && (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-spinner h-12 w-12 text-info"></span>
                </div>
            )}

            {error && (
                <div className="flex justify-center mt-10">
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            {!loading && !error && animeList.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            )}

            {isEmpty && (
                <div className="flex flex-col items-center mt-16 text-center">
                    <p className="text-xl font-semibold text-gray-500">
                        Anime no encontrado :p
                    </p>
                </div>
            )}
        </div>
    );
}
