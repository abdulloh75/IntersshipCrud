import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import './Get.css'

function Get() {
  // api get for state
  const [users, setUsers] = useState();


  // Get api for function
  const Kategoriya = async () => {
    try {
      const response = await axios.get('users/');
      setUsers(response.data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  function handleClick() {
    Kategoriya();
  }

  // Always refresh
  useEffect(() => {
    Kategoriya();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Phone number</th>
            <th>Location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.age}</td>
                <td>{user.phone_number}</td>
                <td>{user.location}</td>
                <td> <Edit car={user} handleClick={handleClick} id={user.id} /> </td>
                <td><Delete handleClick={handleClick} id={user.id} /></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Get;
