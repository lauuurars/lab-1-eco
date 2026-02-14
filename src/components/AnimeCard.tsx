import type { Anime } from "../types/AnimeType";

interface Props {
    anime: Anime;
}

export const AnimeCard = ({ anime }: Props) => {
    return (
        <div className="
        bg-gray-800 
        rounded-xl 
        p-4 
        shadow-lg 
        transition-all 
        duration-500 
        hover:shadow-[#393bce] 
        hover:-translate-y-1
        ">
            <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="flex rounded-lg mb-3 mx-auto"
            />
            <h2 className="font-semibold">{anime.title}</h2>
            <p className="text-sm text-gray-400">
                ⭐ {anime.score ?? "No calificado :c"}
            </p>
        </div>
    );
};
