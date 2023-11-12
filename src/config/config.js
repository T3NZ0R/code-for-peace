import {Cookies} from "react-cookie";

export const apiDataBaseUrl = process.env.REACT_APP_BASE_API_URL;

export const headersToken = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
};


