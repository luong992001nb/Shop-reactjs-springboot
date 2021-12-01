import React,{useState,useEffect} from "react";
import { useForm } from 'react-hook-form'
import { useNavigate ,useParams} from 'react-router';
import { read } from "../../../api/productAPI";
const EditProduct = ({onUpdate})=>{
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    let navigate = useNavigate();
    const {id} =useParams();
    const [products,setProducts] = useState({});
    useEffect(()=>{
        read(id).then((response)=> {
            setProducts(response.data);
            reset(response.data);
        });
    }
    ,[id,reset]);

    const onhandleSubmit= (data)=>{
        onUpdate({id,...data});
  }


return(
    <>
    <form onSubmit={handleSubmit(onhandleSubmit)} class="border border-warning rounded">
    <h1 >EDIT PRODUCT</h1>
  <div className="form-group row" >
    <label className="col-sm-2 col-form-label">Name Category</label>
    <div className="col-sm-10">
    <input className="form-control" type="text"
     placeholder="name" 
     {...register('name',{required: true})}
     />
     {errors.name && <p> Field is required</p>}
    </div>
  </div>
  
   <button class="btn btn-warning" > <i class="far fa-edit">Edit Product</i></button>
   <button type='button' class="btn btn-info" 
   onClick={()=>{navigate(-1)}}>Back</button>

</form>
    </>
);
}
export default EditProduct;