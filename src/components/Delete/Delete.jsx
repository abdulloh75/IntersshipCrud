import React from 'react';
import axios from 'axios';

function Delete({ id, handleClick }) {

  // delete to user
  const deleteuser = async () => {
    try {
      const response = await axios.delete(
        `users/${id}/`
      );
      if (!response.status === 204) {
        console.log('Error happened');
      }
      handleClick();
    } catch (error) {
      console.error('Error happened', error);
    }
  };

  return (
    // delete user button
    <button style={{ padding: "5px 10px", cursor: 'pointer', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px'}} onClick={deleteuser}>Delete</button>
  )
}

export default Delete;
