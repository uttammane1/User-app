import React from "react";
import UserList from "../components/UserList";

const HomePage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">User List</h1>
    <UserList />
  </div>
);

export default HomePage;
