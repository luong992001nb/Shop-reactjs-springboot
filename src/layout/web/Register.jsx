import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { singup } from "../../api/authAPI.jsx";
import {  useNavigate } from "react-router";
import { authenticate } from "../../authenticate.js";
const Register = ()=>{
    const{register,handleSubmit}= useForm(); 
    const navigate = useNavigate();
    const onHandleSubmit=(data)=>{
      console.log(data);
      singup(data).then((response)=>{
          authenticate(response.data.user);
          toast.success("đăng kí thành cmn coong");
          navigate('/login');
      }).catch((error) => toast.error(error.response.data));
    }
return(
    <div className="container">
    <h1>Form Đăng Kí</h1>
    <form onSubmit={handleSubmit(onHandleSubmit)}>
  <div className="form-group row" >
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" {...register('email')}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" {...register('password')} />
    </div>
  </div>

  <div className="form-group row">
    <div className="col-sm-10">
      <button className="btn btn-primary">Register</button>
    </div>
  </div>
</form>
</div>
);
}
export default Register;