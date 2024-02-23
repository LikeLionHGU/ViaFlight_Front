import { React, useState } from "react";
import Modal from "react-modal";
import "../../../../style/Schedule_modal.css";

function Schedule_Modal({ tittle, description, Modalicon, ModaliconBlack }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000080",
    },
    content: {
      width: "1200px",
      height: "799px",
      inset: "unset",
      margin: "55vh auto",
      padding: 0,
      transform: "translateY(-50%)",
      position: "relative",
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
          <img className="Info_Icon" src={ModaliconBlack}></img>
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
