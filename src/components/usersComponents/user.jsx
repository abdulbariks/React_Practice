import React from "react";

const User = ({ user }) => {
  const { name, username, email } = user;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>User Name: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
