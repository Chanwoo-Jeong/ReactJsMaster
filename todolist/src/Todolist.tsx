import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DefaultValue } from "recoil";

// function Todolist() {

//   const [todo, setTodo] = useState<string>("");

//   const todoHandler = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const todoData = new FormData(e.currentTarget);
//     const newTodo = todoData.get("todo") as string;
//     setTodo(newTodo);
//     console.log(todo) //비어있는 값이 출력된다.
//     // setTimeout(()=>console.log(todo) , 5000) //여전히 동일한 문제가 발생한다.
//     e.currentTarget.reset();
// };

// useEffect(()=>console.log(todo) , [todo])

//   return (
//     <>
//       <div>
//         <form onSubmit={todoHandler}>
//           <input type="text" name="todo" placeholder="write to do" />
//           <button>Add</button>
//         </form>
//         {todo}
//       </div>
//     </>
//   );
// }

interface IForm {
  name: string;
  Email: string;
  password: string;
  passwordCF: string;
  extraError?: string;
}

function Todolist() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      Email: "naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordCF)
      setError(
        "passwordCF",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    //setError("extraError", {message : "server is offline"})
  };
  console.log(errors);
  // console.log(watch());
  return (
    <>
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onValid)}
        >
          <input
            {...register("name", {
              required: "name is required",
              validate: {
                noWoony: (value) =>
                  value.includes("woony") ? "no woony allowed" : true,
                noLuna: (value) =>
                  value.includes("Lunana") ? "no Luna allowed" : true,
              },
              minLength: { value: 5, message: "too short name" },
            })}
            type="text"
            placeholder="name"
          />
          <span>{errors?.name?.message as string}</span>
          <input
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "Only naver Email use",
              },
            })}
            type="text"
            placeholder="Email"
          />
          <span>{errors?.Email?.message as string}</span>
          <input
            {...register("password", {
              required: "password is required",
              minLength: { value: 7, message: "too short password" },
            })}
            type="text"
            placeholder="password"
          />
          <span>{errors?.password?.message as string}</span>
          <input
            {...register("passwordCF", {
              required: "passwordCF is required",
              minLength: { value: 7, message: "too short password" },
            })}
            type="text"
            placeholder="passwordCF"
          />
          <span>{errors?.passwordCF?.message as string}</span>
          <button>Add</button>
          <span>{errors?.extraError?.message as string}</span>
        </form>
      </div>
      {watch().name && watch().Email && watch().password ? "submit" : ""}
    </>
  );
}

export default Todolist;
