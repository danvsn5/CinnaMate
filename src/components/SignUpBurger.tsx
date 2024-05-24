import Modal from "react-modal"
import { useState } from "react";
import { useEffect } from "react";
Modal.setAppElement('#root');
import db from "./utils/firebaseini";
import { doc, setDoc } from "firebase/firestore";

const SignUpBurger = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 1059);

    
    let [Email, setEmail] = useState("")
    let [Password, setPassword] = useState("")

    const inputEChange = (e: any) => {
        setEmail(e.currentTarget.value)
    }

    const inputPChange = (e: any) => {
        setPassword(e.currentTarget.value)
    }


    const updateMedia = () => {
        setDesktop(window.innerWidth < 1059);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


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

    async function addUser() {

        const data = {
            email: Email,
            password: Password
        };

        // Add a new document in collection "cities" with ID 'LA'
        await setDoc(doc(db, "users", `${Email}`), data);
        setIsOpen(false);
    }

    return (
        <div>
            {isDesktop ? (
                <button className="burger-item-button" id="itm-btn-D" onClick={openModal}>Sign Up or Log In</button>

            ) : (
                <span></span>
            )}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                closeTimeoutMS={300}
                className="sign-up-modal"
                overlayClassName="modal-overlay"
                contentLabel="Sign Up or Log In">
                <div className="sign-up-content">

                    <div className="modal-title">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="inputs">
                        <h1 className="text-tag-label">Your Email</h1>
                        <input className="editor sign-up-user" value={Email} onChange={inputEChange} type="text" spellCheck={false} placeholder="Email..."></input>
                        <h1 className="text-tag-label">Your Password</h1>
                        <input className="editor sign-up-password" value={Password} onChange={inputPChange} type="password" maxLength={200} placeholder="Password..."></input>
                    </div>
                    <div className="sign-up-buttons">
                        <button className="switch-buttons">Log In Instead</button>
                        <button className="submit" onClick={addUser}>Submit</button>
                    </div>

                </div>
            </Modal>

        </div>
    )
}

export default SignUpBurger