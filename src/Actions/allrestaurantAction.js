import axios from "axios";
import { base_Url } from "../baseUrl";
import { FAIL, SUCCESS } from "../constants/allrestaurantConstant";
import { type } from "@testing-library/user-event/dist/type";
// logic for updating state

export const RestaurantListAction = ()=> async (dispatch) =>{

try{
    // api call
    const {data} = await axios.get(`${base_Url}/restaurants`)
    // console.log(data);
    dispatch({
        payload:data, type:SUCCESS
    })

}
catch(error){
    dispatch({
        payload:error, type:FAIL
    })



}
}