import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import './Get.css'
import Loading from "../loading/Loading";

function Get() {
  // api get for state
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  // Get api for function
  const Kategoriya = async () => {
    setLoading(true);
    try {
      const response = await axios.get('users/');
      setUsers(response.data);
      setLoading(false);
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
      {loading && (
              <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex bg-opacity-75 backdrop-filter backdrop-blur-lg md:w-[100%] md:h-full items-center justify-center">
                  <Loading/>
                </div>
              </div>
      )}
      {users && users.length > 0 ? (
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
          {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.age}</td>
                <td>{user.phone_number}</td>
                <td>{user.location}</td>
                <td> <Edit handleClick={user}  /> </td>
                <td><Delete  id={user.id} /></td>
              </tr>
            ))}
        </tbody>
        </table>
      ) : (
          <p></p>
      )}
      <Post handleClick={handleClick}/>
    </>
  );
}

export default Get;
