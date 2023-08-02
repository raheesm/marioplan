import { useForm } from "react-hook-form";

const SignIn = () => {

  const {register,handleSubmit} = useForm({
    defaultValues:{
      email:'',
      password:''
    }
  });

  const onSubmit = (data)=>{
    console.log(data);
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name="email" {...register("email")} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password')} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;