import Modal from "react-modal"
import { useState } from "react";
Modal.setAppElement('#root');



const SignUp = () => {

    let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="navbar-button sign-up-button" onClick={openModal}>
                <i className="icon fa-solid fa-user-plus exp-icon"></i>
            </button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="sign-up-modal"
                overlayClassName="modal-overlay"
                contentLabel="Example Modal">
            </Modal>

        </div>
    )
}

export default SignUp