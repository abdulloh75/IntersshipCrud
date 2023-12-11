import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Post.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';

function Post({ handleClick }) {
  const { handleSubmit, register } = useForm();
  // open to Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // send to api request
  const onSubmit = async (formData) => {
    const formDataObject = new FormData();
    formDataObject.append("first_name", formData.first_name);
    formDataObject.append("last_name", formData.last_name);
    formDataObject.append("age", formData.age);
    formDataObject.append("phone_number", formData.phone_number);
    formDataObject.append("location", formData.location);

    try {
      const response = await axios.post(
        'users/',
        formDataObject,
      );

      if (!response.data.success) {
        console.log("Error happened");
        return;
      }
      handleClick();
    } catch (error) {
      console.error("An error occurred while making the request:", error);
    }
  };

  return (
    <>
      {/* Button for open Modal */}
      <Button type="primary" style={{marginTop: '20px'}} onClick={showModal}>
        Users qo'shish
      </Button>
      {/* Modal add to users */}
      <Modal centered width={380} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className='form_post' onSubmit={handleSubmit(onSubmit)}>
          <input className='first_name' {...register("first_name")} placeholder="Enter first name" />
          <input className='last_name'  {...register("last_name")} placeholder="Enter last name" />
          <input className='age'  {...register("age")} placeholder="Enter age" />
          <input className='phone_number'  {...register("phone_number")} placeholder="Enter phone number" />
          <input className='location'  {...register("location")} placeholder="Enter location" />
          <button className='btn' type="submit">Add</button>
        </form>
      </Modal>
    </>
  );
}

export default Post;
