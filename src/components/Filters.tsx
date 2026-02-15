import { useState } from "react";

interface Props {
    onFilterChange: (filters: {
        name: string;
        type: string;
        sort: string;
    }) => void;
}

export const Filters = ({ onFilterChange }: Props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [sort, setSort] = useState("desc");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onFilterChange({
            name,
            type,
            sort,
        });
    };

    const handleReset = () => {
    setName("");
    setType("");
    setSort("desc");

    onFilterChange({
        name: "",
        type: "",
        sort: "desc",
    });
};

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-4 flex flex-wrap gap-4 items-center justify-center"
        >
            {/* input para buscar nombree */}
            <input
                type="text"
                placeholder="Buscar anime..."
                className="input focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* select de tipo :p */}
            <select
                className="select select-bordered focus:ring-0 focus:border-blue-500 transition-all duration-200"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">Todos</option>
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
                <option value="ova">OVA</option>
                <option value="special">Special</option>
                <option value="ona">ONA</option>
                <option value="music">Music</option>
            </select>

            {/* ordenar por score :p */}
            <select
                className="select select-bordered focus:ring-0 focus:border-blue-500 transition-all duration-200"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="desc">Score: Mayor a menor</option>
                <option value="asc">Score: Menor a mayor</option>
            </select>

            <button className="btn btn-info text-white" type="submit">
                Filtrar
            </button>               

            <button
                type="button"
                onClick={handleReset}
                className="btn btn-error text-white"
            >
                Limpiar
            </button>
        </form>
    );
};
