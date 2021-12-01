import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signin } from "../../api/authAPI.jsx";
import { authenticate } from "../../authenticate.js";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onHandleSubmit = (data) => {
        console.log(data);
        signin(data).then((response) => {
            authenticate(response.data.user);
            toast.success("đăng nhập thành cmn coong");
            if (response.data.user.id === 1) {
                navigate("/admin/dashboard");
              } else {
                navigate("/");
              }
        }).catch((error) => toast.error(error.response.data));
    }
    return (
        <>
            <div className="container">
                <h1>Form Đăng Nhập</h1>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group row" >
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" {...register('email')} />
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
                            <button className="btn btn-primary">LogIn</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;