import { FAIL, SUCCESS } from "../constants/allrestaurantConstant"

export const allrestaurantReducer = (state={allrestaurants:[]},action)=>{


    switch(action.type){
        case SUCCESS: 
        return{
            allrestaurants:action.payload
        }
        case FAIL:
            return{
                allrestaurants:[]
            }

            default:
                return state
    }

}