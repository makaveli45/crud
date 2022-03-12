import { combineReducers } from "redux";
import createItemReducer from "./CreateItemsReducer";


const rootReducer = combineReducers({
  itemsData: createItemReducer,
});

export default rootReducer;
