import React, { use } from "react";
import User from "./user";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  return (
    <div>
      <h3>All User are here: {users.length}</h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
