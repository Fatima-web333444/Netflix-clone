import { create } from "zustand";

export const useContentStore=create((set)=>({
    //use state 
    contentType:"movie",setContentType:(type)=>set({contentType:type}),

})); 