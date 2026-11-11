import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  username: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { email: "", username: "" } });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="bg-slate-500 h-screen border text-white grid grid-cols-3 p-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 border mx-2 rounded-2xl flex flex-col justify-center items-center"
      >
        <div>
          <label htmlFor="username">username</label>
          <input className="border-white border-2 outline-none  rounded-xl  px-5 py-1"
            id="name"
            type="text"
            aria-invalid={errors.username ? "true" : "false"}
            {...register("username", { required: "username is required" })}
          />
          {errors.username && <p role="alert">{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
          className="border-white border-2 outline-none  rounded-xl  px-5 py-1"
            id="email"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="border"></div>
    </div>
  );
};

export default SignIn;
