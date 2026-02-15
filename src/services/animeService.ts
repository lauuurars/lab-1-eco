export const getAnimes = async (filters: {
    name: string;
    type: string;
    sort: string;
}) => {
    const { name, type, sort } = filters;

    const API = `https://api.jikan.moe/v4/anime?q=${name}&type=${type}&order_by=score&sort=${sort}`;

    const response = await fetch(API);

    if (!response.ok) {
        throw new Error("Error conectando a la API :P");
    }

    const data = await response.json();

    return data.data;
};
