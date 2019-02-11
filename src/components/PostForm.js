import React, { Component } from 'react'
import {withFormik, Field, Form} from 'formik'
import axios from 'axios'

class PostForm extends Component {

  render() {
    return (
      <div className="postform-cont">
        <h1>Add Post</h1>
        <Form>
            <label>title : 
                <Field type ='text' name="title" placeholder='Title..'></Field>
            </label>
            <br/>
            <label>body : 
                <Field name="body" component='textarea' placeholder='Body..'></Field>
            </label>
            <button>Submit</button>
        </Form>
      </div>
    )
  }
}

const FormikAddPst=withFormik({
  mapPropsToValues({title, body}){
      return{
        title:title||'',
        body:body||''
      }
  },
  handleSubmit(values){
    axios.post("https://jsonplaceholder.typicode.com/posts",values)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
  }
})(PostForm)

export default FormikAddPst
