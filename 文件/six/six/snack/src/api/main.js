import axios from "axios"
let Url="/api/main"

async function getFloorData(){
    let res=await axios.post(Url);
    return res;
}

export default{
    getFloorData
};