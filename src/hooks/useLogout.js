import {Cookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {useMemo} from "react";


export function useLogout() {
    const navigation = useNavigate()

    const cookies = new Cookies();

    const logout = () => {
        cookies.remove("token");
        navigation("/")
    }
    // eslint-disable-next-line
    return useMemo(() => ({logout}), [navigation])
}
