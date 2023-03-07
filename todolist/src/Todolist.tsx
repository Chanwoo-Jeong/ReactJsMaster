import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

function Todolist() {
const {register , watch} = useForm();
console.log(watch())
  return (
    <>
      <div>
        <form>
          <input {...register("toDo")} type="text"  placeholder="write to do" />
          <button>Add</button>
        </form>
        <input {...register("name")} type="text"  placeholder="write to name" />
      </div>
      {watch().toDo && watch().name ? "submit" :''}
    </>
  );
}

export default Todolist;
