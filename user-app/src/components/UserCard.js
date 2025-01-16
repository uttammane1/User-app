import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-bold">{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.address.city}</p>
    <Link to={`/user/${user.id}`} className="text-blue-500">View Details</Link>
  </div>
);

export default UserCard;
