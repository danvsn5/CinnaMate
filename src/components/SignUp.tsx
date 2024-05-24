import Modal from "react-modal"
import { useState } from "react";
Modal.setAppElement('#root');



const SignUp = () => {

    //let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
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
                contentLabel="Sign Up or Log In">
                <div className="sign-up-content">

                    <div className="modal-title">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="inputs">
                        <h1 className="text-tag-label">Your Email</h1>
                        <input className="editor sign-up-user" type="text" spellCheck={false} placeholder="Email..."></input>
                        <h1 className="text-tag-label">Your Password</h1>
                        <input className="editor sign-up-password" type="password" maxLength={200} placeholder="Password..."></input>
                    </div>
                    <div className="sign-up-buttons">
                    <button className="switch-buttons">Log In Instead</button>
                    <button className="submit">Submit</button>
                    </div>

                </div>
            </Modal>

        </div>
    )
}

export default SignUp