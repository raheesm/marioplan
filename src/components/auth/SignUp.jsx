import { useForm } from "react-hook-form";

const SignUp = () => {

  const {register,handleSubmit} = useForm({
    defaultValues:{
      firstName:'',
      lastName:'',
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
        <h5 className="grey-text text-darken-3">SignUP</h5>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' name="firstName" {...register("firstName")} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' name="lastName" {...register("lastName")} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name="email" {...register("email")} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password')} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Register</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;