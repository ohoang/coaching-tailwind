import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Form } from './form';


import '../css/modal.css';

export const ReactModal = ({ course, darkMode = false }) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <button
          onClick={openModal}
          className={`
            text-sm
            tracking-wide
            uppercase
            inline-block
            bg-opacity-0
            transition duration-300 ease-in-out
           ${darkMode ? "hover:bg-gray-800" : "hover:bg-red-600"}
            border-2
           ${darkMode ? "border-white" : "border-red-500"}
           ${darkMode ? "text-white " : "text-red-500"}
            hover:text-white
            font-bold
            w-full
            p-3
            rounded
            no-underline
        `}>
          Join the waitlist
        </button>
      </div>
      <Modal
        shouldCloseOnOverlayClick={false}
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='overlay'
        contentLabel='Example Modal'
      >
        <button onClick={closeModal} className='float-right	p4 mt-2 mr-4 font-bold text-lg'>x</button>
        <Form course={course}/>
      </Modal>
    </div>
  );
}

ReactModal.propTypes = {
  course: PropTypes.string,
  darkMode: PropTypes.bool
}
