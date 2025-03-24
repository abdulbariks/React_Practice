import { Suspense } from "react";
import "./App.css";
import Cricket from "./Cricket";
import Users from "./components/usersComponents/users";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};
function App() {
  const usersPromise = fetchUsers();
  console.log(usersPromise);

  return (
    <>
      <Suspense fallback={<h3>Users Loading........</h3>}>
        <Users usersPromise={usersPromise}></Users>
      </Suspense>
      {/* <h2>Cricket Score</h2>
      <Cricket></Cricket> */}
      {/* <h2>Practice React</h2>
      <Student name="Barik" class="Ten" subject="ICT"></Student>
      <Student name="AbdulBarik" class="Ten" subject="Bangla"></Student> */}
    </>
  );
}

// function Student(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Class: {props.class}</p>
//       <p>Subject: {props.subject}</p>
//     </div>
//   );
// }

export default App;
