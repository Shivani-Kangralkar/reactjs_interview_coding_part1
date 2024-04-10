import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css"


const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    console.log("onclose");
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={() => handleClick()}>Modal popup</button>
      {showModal && (
        <Modal
          id={"custom-id"}
          header={<h1>Customised header</h1>}
          body={<div>Customised body</div>}
          footer={<h1>Customised Footer </h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalTest;
