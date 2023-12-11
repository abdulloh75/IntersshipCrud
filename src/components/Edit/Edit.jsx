import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useForm } from 'react-hook-form';


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

function Edit({ handleClick, id }) {
  const { handleSubmit, register } = useForm();
  // Modal open state
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const OnEdit = async (formDataUpdate) => {
    // Update to information send to api
    const formDataObjectUpdate = new FormData();
    formDataObjectUpdate.append("first_name", formDataUpdate.first_name);
    formDataObjectUpdate.append("last_name", formDataUpdate.last_name);
    formDataObjectUpdate.append("age", formDataUpdate.age);
    formDataObjectUpdate.append("phone_number", formDataUpdate.phone_number);
    formDataObjectUpdate.append("location", formDataUpdate.location);

    try {
      await axios.put(
        `users/${id}/`,
        formDataObjectUpdate,
      );

      closeModal();
      handleClick();
    } catch (error) {
      console.error('Error happened', error);
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
          <input className='first_name' {...register("first_name")} placeholder="Enter first name" />
          {/* // last_name edit send */}
          <input className='last_name'  {...register("last_name")} placeholder="Enter last_name" />
          {/* // age edit send */}
          <input className='age'  {...register("age")} placeholder="Enter age" />
          {/* // phone_number edit send */}
          <input className='phone_number'  {...register("phone_number")} placeholder="Enter phone_number" />
          {/* // location edit send */}
          <input className='location'  {...register("location")} placeholder="Enter location" />
          {/* // button edit send */}
          <button className='btn' type="submit">EDIT</button>
        </form>
      </Modal>
    </div>
  );
}

export default Edit;
