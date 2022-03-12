import { getValue } from "@testing-library/user-event/dist/utils";
import { CREATE_ME, UPDATE_ITEM } from "../reduxActions/CreateItems";
import { CLEAR_ITEMS } from "../reduxActions/CreateItems";
import { CLEAR_ITEM } from "../reduxActions/CreateItems";
const initState = [];

const createItemReducer = (state = initState, action) => {
    const items=state;
    const item=action.payload;

    if (action.type === CREATE_ME) {
        return [
      ...items,item
    ]
      }

      if(action.type===CLEAR_ITEMS){
        return items.filter(item => {
      return false;
    });
    }

    if(action.type===CLEAR_ITEM){
           const remainingItems=items.filter((val,id)=>id!==item);
        return remainingItems;
        }

        if(action.type===UPDATE_ITEM){
        items[item.key]=item.value;
         }
    


  return state;
};


export default createItemReducer;