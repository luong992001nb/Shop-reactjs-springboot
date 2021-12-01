import React,{useState,useEffect} from "react";
import { useForm } from 'react-hook-form'
import { useNavigate ,useParams} from 'react-router';
import { readCate } from "../../../api/categoryAPI";

const EditCategory =({onUpdate})=>{
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [categorys,setCategorys] = useState({});
    const {id} =useParams();
    let navigate = useNavigate();
const onhandleSubmit= (data)=>{
      onUpdate({id,...data});
      navigate(-1);
     
}

useEffect(()=>{
    readCate(id).then((response)=> {
        setCategorys(response.data);
        reset(response.data);
    });
},[id,reset]);

  

    
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
   <button class="btn btn-warning"  > <i class="fas fa-plus-circle">Edit Category</i></button>
</form>


        </>
    );
}
export default EditCategory;