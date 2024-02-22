import { React, useState } from "react";
import Modal from "react-modal";
import "../../../../style/Schedule_modal.css";

import Shower_Icon from "../../../../img/shower.svg";

function Schedule_Modal({ showerFacilities }) {
  //추후에 props로 넘겨받을 데이터 저장하는 변수들
  const title = "SHOWER FACILITIES";
  const [modalIsOpen, setModalIsOpen] = useState(false); //modal이 클릭 되었는지 확인하는 변수

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "#00000070",
    },
    content: {
      width: "892px",
      height: "594px",
      inset: "unset",
      margin: "50vh auto",
      padding: 0,
      transform: "translateY(-50%)",
      position: "relative",
    },
  };

  return (
    <div className="list-container">
      {/* Before Modal, <div> */}
      <div className="rect3" onClick={() => setModalIsOpen(true)}>
        {/*클릭시 Modal open*/}
        <img
          src={Shower_Icon}
          alt="  ICON이 들어갈 자리 
"
        ></img>
      </div>
      {/* After Modal(Modal 화면) */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="closeBtn">
          <button onClick={() => setModalIsOpen(false)}></button>
        </div>
        <div className="modal-wrapper">
          <div className="Info_Icon"></div>
          <div className="Info_title">{title}</div>
          <div className="Info_descrip">
            <p>{showerFacilities}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Schedule_Modal;
