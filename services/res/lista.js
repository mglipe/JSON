import api from "../api";

export async  function getList(){
    try{
        const list = await api.get("/lista");
        return list.data;
    }catch(err){
        console.log(err);
        return [];
    }
    
}