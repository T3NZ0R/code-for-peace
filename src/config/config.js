import {Cookies} from "react-cookie";

export const apiDataBaseUrl = process.env.REACT_APP_BASE_API_URL;

export const headersToken = (bearer = true) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    if (bearer) {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    } else {
        return {token: token};
    }

};


