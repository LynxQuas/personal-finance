import { useForm } from "react-hook-form"
import { Link } from "@tanstack/react-router"
import BasicField from "./BasicField"
import InputWithIcon from "./input-with-icon"
import type { SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 w-full bg-white rounded-lg md:w-120 lg:w-auto"
    >
      <div className="flex flex-col gap-2">
        <h2 className="py-4 text-3xl font-bold">Login</h2>

        <BasicField
          type="text"
          label="Email"
          register={register}
          name="email"
          helperText={errors.email && errors.email.message}
        />

        <InputWithIcon
          helperText={errors.password && errors.password.message}
          className=""
          name="password"
          label="Password"
          register={register}
        />

        <button className="w-full py-4 bg-black text-white rounded-md cursor-pointer">
          Login
        </button>
        <p className="text-xs text-center pt-2">
          Need to create account?
          <Link
            to="/sign-up"
            className="pl-2  hover:text-blue-300 text-black font-semibold underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  )
}
