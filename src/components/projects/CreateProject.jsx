import { useForm } from "react-hook-form";

const CreateProject = () => {

  const {register,handleSubmit} = useForm({
    defaultValues:{
      title:'',
      content:''
    }
  });

  const onSubmit = (data)=>{
    console.log(data);
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name="title" {...register("title")} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea className="materialize-textarea" cols='30' rows='10' id='content' {...register('content')} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;