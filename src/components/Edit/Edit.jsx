import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


// Modal style
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '350px'
  },
};
function Edit({ handleClick }) {
  const [inputValue,setInputvalue] =useState(handleClick)
  const { handleSubmit } = useForm();
  // Modal open state
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const OnEdit = async () => {
    const formDataObjectUpdate = new FormData();
    formDataObjectUpdate.append("first_name", inputValue.first_name);
    formDataObjectUpdate.append("last_name", inputValue.last_name);
    formDataObjectUpdate.append("age", inputValue.age);
    formDataObjectUpdate.append("phone_number", inputValue.phone_number);
    formDataObjectUpdate.append("location", inputValue.location);

    try {
      await axios.put(
        `users/${id}/`,
        formDataObjectUpdate,
      );
      toast.success("User tahrirlandi", {
        position: toast.POSITION.TOP_RIGHT,
      });
      closeModal();
    } catch (error) {
      console.error('Error happened', error);
      toast.success("User tahrirlanmadi", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <div>
      {/* // Button for opening modal */}
      <button onClick={openModal}>Edit</button>
      {/* // Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       {/* // Edit */}
        <form className='form_post' onSubmit={handleSubmit(OnEdit)}>
          {/* // first_name edit send */}
          <input value={inputValue.first_name}
           onChange={(e) => setInputvalue({...inputValue, first_name:e.target.value})}
            className='first_name'  placeholder="Enter first name" />
          {/* // last_name edit send */}
          <input className='last_name'
          value={inputValue.last_name}
          onChange={(e) => setInputvalue({ ...inputValue, last_name: e.target.value })}
          placeholder="Enter last_name" />
          {/* // age edit send */}
          <input className='age'
          value={inputValue.age}
          onChange={(e) => setInputvalue({ ...inputValue, age: e.target.value })}
          placeholder="Enter age" />
          {/* // phone_number edit send */}
          <input className='phone_number'
          value={inputValue.phone_number}
          onChange={(e) => setInputvalue({ ...inputValue, phone_number: e.target.value })}
          placeholder="Enter phone_number" />
          {/* // location edit send */}
          <input className='location'
          value={inputValue.first_name}
          onChange={(e) => setInputvalue({ ...inputValue, location: e.target.value })}
          placeholder="Enter location" />
          {/* // button edit send */}
          <button className='btn' type="submit">EDIT</button>
        </form>
      </Modal>
    </div>
  );
}

export default Edit;
