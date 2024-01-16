import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchBySearch = async ({ newQueryPart, page}) => {
    const API_KEY = '26391329-e9f741eae2fe2910e4ec92693';

    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: newQueryPart,
        image_type: "photo",
        orientation: "horizontale",
        safesearch: true,
        page,
        per_page: 12,
    });

    const response = await axios.get(`?${searchParams}`);
    return response.data;
};