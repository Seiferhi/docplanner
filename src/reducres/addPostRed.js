import {GET_POSTS} from '../actions/types'

const initialState = {
    posts:[],
    post:{}
}
export const addPostRed = (state=initialState, action)=>{   
    console.log(action.payload)    
   switch(action.type){
       
       case GET_POSTS:
         return {
            ...state,
             posts:action.payload
         }
         
       default : 
        return state
   }
   
}  