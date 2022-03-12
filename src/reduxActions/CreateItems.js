export const CREATE_ME = "CREATE_ME";
export const CLEAR_ITEMS ="CLEAR_ITEMS";
export const CLEAR_ITEM ="CLEAR_ITEM";
export const UPDATE_ITEM ="UPDATE_ITEM";

export const addtoItems = (item) => {
    return dispatch =>{
    dispatch({
        type:CREATE_ME,
        payload:item,
    })
    }
}


export const clearItems =()=>{
    return dispatch =>{
        dispatch({type:CLEAR_ITEMS});
    }
}


export const clearItem =(key)=>{
    return dispatch =>{
        dispatch({type:CLEAR_ITEM,payload:key});
    }
}

export const updateItem =(key,value)=>{
    return dispatch =>{
        dispatch({type:UPDATE_ITEM,payload:{key,value}});
    }
}


