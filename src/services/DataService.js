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


// I N F O

export const getInfo = async () => {
    const {data: response} = await axios.post(`${apiDataBaseUrl}/auth/info`, {
        ...headersToken(false),
    });
    return response;
}

// A D M I N S

export const getAdmins = async () =>
    await axios.get(`${apiDataBaseUrl}/api/admins/`, {
        ...headersToken()
    });

export const getAdmin = async (id) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/api/admins/${id}`, {
            ...headersToken()
        });
    return response;
};

export const postAdmins = async (data) => {
    const {data: response} = await axios.post(
        `${apiDataBaseUrl}/api/admins`,
        data,
        {...headersToken()}
    );
    return response.data;
};

export const editAdmins = async (data) => {
    const {data: response} = await axios.put(
        `${apiDataBaseUrl}/api/admins/${data.id}`,
        data.data,
        {...headersToken()}
    );
    return response.data;
};

// U S E R S

export const getUsers = async () =>
    await axios.get(`${apiDataBaseUrl}/api/users/`, {
        ...headersToken()
    });

export const getUser = async (id) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/api/users/${id}`, {
            ...headersToken()
        });
    return response;
};

export const postUsers = async (data) => {
    const {data: response} = await axios.post(
        `${apiDataBaseUrl}/api/users`,
        data,
        {...headersToken()}
    );
    return response.data;
};

export const editUsers = async (data) => {
    const {data: response} = await axios.put(
        `${apiDataBaseUrl}/api/users/${data.id}`,
        data.data,
        {...headersToken()}
    );
    return response.data;
};
export const deleteUsers = async (id) => {
    const {data: response} = await axios.delete(
        `${apiDataBaseUrl}/api/users/${id}`,
        {...headersToken()}
    );
    return response.data;
};

export const addUserToApp = async (data) => {
    const {data: response} = await axios.put(
        `${apiDataBaseUrl}/api/apps/${data.id}/add-user`,
        data.data,
        {...headersToken()}
    );
    return response.data;
};

export const deleteUserFromApp = async (data) => {
    const {data: response} = await axios.put(
        `${apiDataBaseUrl}/api/apps/${data.appId}/remove-user`,
        data.data,
        {...headersToken()}
    );
    return response.data;
};

// A P P S

export const getApps = async () =>
    await axios.get(`${apiDataBaseUrl}/api/apps`, {
        ...headersToken()
    });

export const getApp = async (id) => {
    const {data: response} = await axios.get(
        `${apiDataBaseUrl}/api/apps/${id}`, {
            ...headersToken()
        });
    return response;
};

export const postApps = async (data) => {
    const {data: response} = await axios.post(
        `${apiDataBaseUrl}/api/apps`,
        data,
        {...headersToken()}
    );
    return response.data;
};

export const editApps = async (data) => {
    const {data: response} = await axios.put(
        `${apiDataBaseUrl}/api/apps/${data.id}`,
        data.data,
        {...headersToken()}
    );
    return response.data;
};
export const deleteApps = async (id) => {
    const {data: response} = await axios.delete(
        `${apiDataBaseUrl}/api/apps/${id}`,
        {...headersToken()}
    );
    return response.data;
};
