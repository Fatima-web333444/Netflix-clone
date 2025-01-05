import { useEffect, useState } from "react"
import { useContentStore } from "../store/content";
import axios from "axios";


const useGetTrendingContent = () => {
 const [trendingContent,setTrendingContent]=useState(null);
 const {contentType}=useContentStore();

 useEffect(()=>{
    const GetTrendingContent=async()=>{
        const res=await axios.get(`/api/v1/${contentType}/trending`)
        setTrendingContent(res.data.content);
    }
    GetTrendingContent();
 },[contentType]);
 return {trendingContent};
}

export default useGetTrendingContent
