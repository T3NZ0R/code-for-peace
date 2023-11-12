import axios from "axios";

class ApiService {
    /**
     * @param baseURL
     */
    init(baseURL) {
        axios.defaults.baseURL = baseURL;
        axios.defaults.headers.common["Accept"] = "application/json";
    }

    /**
     * @param token
     */
    setAuthHeader = (token) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    };

    removeAuthHeader = () => {
        delete axios.defaults.headers.common["Authorization"];
    };

    /**
     * @param url
     * @returns {Promise<AxiosResponse<T>>}
     */
    get = (url) => axios.get(url);

    /**
     * @param url
     * @param data
     * @returns {Promise<AxiosResponse<T>>}
     */
    post = (url, data) => axios.post(url, data);

    /**
     * @param url
     * @param data
     * @returns {Promise<AxiosResponse<T>>}
     */
    put = (url, data) => axios.put(url, data);

    /**
     * @param url
     * @returns {Promise<AxiosResponse<T>>}
     */
    delete = (url) => axios.delete(url);
}

export default new ApiService();
