import Axios from 'axios';

export default api = async (url, body) => {
    const { data } = await Axios({
        method: 'POST',
        url: `https://api-v3.igdb.com/${url}`,
        headers: {
            'Accept': 'application/json',
            'user-key': '6da406d59e4e0bde3ab3fede82629336'
        },
        data: body
    });
    return data;
}