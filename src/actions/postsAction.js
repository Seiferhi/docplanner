
import {GET_POSTS, ADD_POST} from './types'
import axios from 'axios' 

export const postsAction =()=>{
    return ({
        type : GET_POSTS,
        payload : axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.data)
        .catch(error=>console.log('axios failed',error))
    })

} 


