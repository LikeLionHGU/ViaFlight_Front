import { React, useState } from "react";
import Modal from "react-modal";
import "../../../../style/Schedule_modal.css";
import styled from "styled-components";

function Schedule_Modal({ tittle, description, Modalicon, ModaliconBlack }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000080",
    },
    content: {
      width: "850px",
      height: "550px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      padding: "40px 35px",
      paddingLeft: "80px",
      overflow: "hidden",
    },
  };

  return (
    <div className="list-container">
      {/* Before Modal, <div> */}
      <div className="rect3" onClick={() => setModalIsOpen(true)}>
        <img src={Modalicon} alt=" ICON이 들어갈 자리 "></img>
      </div>
      {/* After Modal(Modal 화면) */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          className="closeBtn_container"
        >
          <div className="closeBtn"> </div>
        </button>

        <div className="modal-wrapper">
          <img className="Info_Icon" src={ModaliconBlack} alt="infoIcon"></img>
          <div className="Info_title">{tittle}</div>
          <div className="Info_descrip">
            <p>{description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Schedule_Modal;
