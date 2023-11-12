import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {getImage,} from "../services/DataService";


export function useImageAPI(name) {


    const imageData = useQuery(["getImage", name], () => getImage(name));


    return useMemo(() => ({imageData}), [imageData])
}
