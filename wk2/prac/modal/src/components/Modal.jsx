import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ setModalOpen, modalOpen }) {
  return (
    <>
      <div className="modal-wrapper" style={{ display: modalOpen }}>
        <div className="modal">
          <div className="textDiv">
            <h3>안녕하세요</h3>
            <p>모달 내용이 어쩌구 저쩌구</p>
          </div>
          <div className="buttonDiv">
            <button
              onClick={() => {
                setModalOpen("none");
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default Modal;
