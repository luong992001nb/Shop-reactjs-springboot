import React from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
const AddProduct =({onAdd ,category})=>{
    const {register,handleSubmit,formState:{errors}} = useForm();
    let navigate = useNavigate();
const onhandleSubmit= (data)=>{
      onAdd(data);
      navigate("/product" ,{replace: true});
}
    



    return(
        <>
        
<form onSubmit={handleSubmit(onhandleSubmit)} class="border border-primary rounded">
    <h1 >ADD PRODUCT</h1>
  <div className="form-group row" >
    <label className="col-sm-2 col-form-label">Name Product</label>
    <div className="col-sm-10">
    <input className="form-control" type="text"
     placeholder="name product" 
     {...register('name',{required: true,maxLength: 255})}
     />
     {errors.name?.type === "required" && <p> Field is required</p>}
     {errors.name?.type === "maxLength" && <p> không được nhập quá 255 kí tự</p>}
    </div>
  </div>
  <div className="form-group row">
  <label className="col-sm-2 col-form-label">Price Product</label>
    <div className="col-sm-10">
    <input className="form-control" type="number"
     placeholder="price" 
     {...register('price',{required: true,maxLength: 32})}
     />
     {errors.price?.type === "required" && <p> Field is required</p>}
     {errors.price?.type === "maxLength" && <p> không được nhập quá 32 kí tự</p>}
    </div>
  </div>
  <div className="form-group row">
  <label className="col-sm-2 col-form-label">Image Product</label>
    <div className="col-sm-10">
    <input className="form-control" type="text" 
    placeholder="Link" 
    {...register('avatar',{required: true})}
    />
    {errors.avatar && <p> Field is required</p>}
    </div>
  </div>

  <div className="form-group row">
  <label className="col-sm-2 col-form-label">Description Product</label>
    <div className="col-sm-10">
    <textarea  className="form-control" id="exampleFormControlTextarea1"
    placeholder="Description" 
    {...register('description',{required: true})}
    />
    {errors.description && <p> Field is required</p>}
    </div>
  </div>



  <div className="form-group row">
  <label className="col-sm-2 col-form-label" >Category</label>
    <div className="col-sm-10">
    <select class="form-control" {...register('category')} >
      {category && category.map((item, index) => {
                            return (
                              <option value={item.id}>{item.name}</option>
                            );
                        })}
    </select>
    </div>
  </div>

   <button class="btn btn-primary" > <i class="fas fa-plus-circle">Add Product</i></button>
</form>


        </>
    );
}
export default AddProduct;