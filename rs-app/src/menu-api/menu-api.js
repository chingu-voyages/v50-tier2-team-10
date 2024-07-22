export const API_ROOT = 'https://menus-api.vercel.app/';

export const getMenu = async () => {
    const url = `${API_ROOT}`;
    const response = await fetch(url);

    return await response.json();

}