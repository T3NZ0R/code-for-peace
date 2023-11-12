import axios from "axios";
import {apiDataBaseUrl, headersToken} from "../config/config";

export const signIn = async (data) => {
    const {data: response} = await axios.post(
        `${apiDataBaseUrl}/auth/login`,
        data
    );
    return response;
};

export const signUp = async (data) => {
    const {data: response} = await axios.post(
        `${apiDataBaseUrl}/auth/register`,
        data
    );
    return response;
};

export const createCollection = async (data) => {
    const {data: response} = await axios.post(
        `${apiDataBaseUrl}/collection/create`,
        ...headersToken(false),
        data
    );
    return response;
};

export const updateCollection = async (data) => {
    const {data: response} = await axios.put(
        `${apiDataBaseUrl}/collection/update/${data}`,
        ...headersToken(false),
        {}
    );
    return response;
};

export const allCollection = async (query) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/collection?page=${query.page}`,
    );
    return response;
};

export const CollectionById = async (id) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/collection/${id}`, {
            ...headersToken(false)
        },
    );
    return response;
};


export const getImage = async (name) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/collection/image/${name}`,
    );
    return response;
};

export const searchCollection = async (name) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/collection/search/${name}`,
    );
    return response;
};
