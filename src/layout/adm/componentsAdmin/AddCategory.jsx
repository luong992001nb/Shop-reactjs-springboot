import React from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
const AddCategory =({onAdd})=>{
    const {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate();
const onhandleSubmit= (data)=>{
      onAdd(data);
      navigate(-1);
     
}
    
    return(
        <>
        
<form onSubmit={handleSubmit(onhandleSubmit)} class="border border-primary rounded">
    <h1 >ADD CATEGORY</h1>
  <div className="form-group row" >
    <label className="col-sm-2 col-form-label">Name CATEGORY</label>
    <div className="col-sm-10">
    <input className="form-control" type="text"
     placeholder="name product" 
     {...register('name',{required: true})}
     />
     {errors.name && <p> Field is required</p>}
    </div>
  </div>
   <button class="btn btn-primary" > <i class="fas fa-plus-circle">Add Category</i></button>
</form>


        </>
    );
}
export default AddCategory;