import Modal from "react-modal"
import { useState } from "react";
import { useEffect } from "react";
Modal.setAppElement('#root');
import db from "./utils/firebaseini";
import { doc, setDoc, getDoc } from "firebase/firestore";

const SignUpBurger = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 1059);


    let [Username, setUsername] = useState("")
    let [Password, setPassword] = useState("")

    const inputEChange = (e: any) => {
        setUsername(e.currentTarget.value)
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

    /* ———————————————————————————————————————— Modal Methods ——————————————————————————————————————— */
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

    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    /*                                         Add User Method                                        */
    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    async function addUser() {

        const data = {
            username: Username,
            password: Password
        };

        const userRef = await getDoc(doc(db, "users", `${Username}`))

        const docRef = doc(db, "users", `${Username}`);
        const docSnap = await getDoc(docRef);

        let dbPassword

        if (docSnap.exists()) {
            dbPassword = docSnap.get("password")
        }

        if (Username != "" && Password != "") {
            if (!!userRef.exists() && Password != dbPassword) {
                alert("User already exists. Try alternate password or new credentials if you do not already have an account.")


                // if user exists and password is correct, you are now logged in and the log in button changes
            } else if (!!userRef.exists() && Password == dbPassword) {
                alert("Logged in successfully!")
                setIsOpen(false);
                // set the logged in status to true
                setLoggedIn(true)

            } else if (!userRef.exists()) {
                // Add a new user to collection named as their username, containing their username and their password
                await setDoc(doc(db, "users", `${Username}`), data);
                alert("Signed up successfully!")
                setIsOpen(false);
                // set the logges in status to true
                setLoggedIn(true)
            }
        }
    }

    /* —————————————————————————————————— Change Rendered Elements —————————————————————————————————— */

    // based on whether or not the user is logged in, change the visual style of the log in
    // button to log out symbol

    const [isLoggedIn, setLoggedIn] = useState(false)

    async function logOut() {

        setIsOpen(false)

        setTimeout(() => {

            setLoggedIn(false)
            setUsername("")
            setPassword("")

        }, 350);

    }

    return (
        <div>
            {isDesktop ? (

                <div>
                    {isLoggedIn ? (
                        <button className="burger-item-button" id="itm-btn-D" onClick={openModal}>Sign Out</button>

                    ) : (
                        <button className="burger-item-button" id="itm-btn-D" onClick={openModal}>Sign Up or Log In</button>
                    )}
                </div>

            ) : (

                <span></span>

            )}


            {isLoggedIn ? (
                /* ——————————————————————————————————————— Logged In Modal —————————————————————————————————————— */
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    closeTimeoutMS={300}
                    onRequestClose={closeModal}
                    className="sign-up-modal"
                    overlayClassName="modal-overlay"
                    contentLabel="Sign Up or Log In">
                    <div className="sign-up-content">
                        <div className="modal-title">
                            <h1>Log Out</h1>
                        </div>
                        <div className="inputs">
                            <h1 className="text-tag-label">Your Username Details</h1>
                            <input className="editor sign-up-user" value={Username} onChange={inputEChange} type="text" spellCheck={false} placeholder="Username..."></input>
                            <h1 className="text-tag-label">Your Password Details</h1>
                            <input className="editor sign-up-password" value={Password} onChange={inputPChange} maxLength={200} placeholder="Password..."></input>
                        </div>
                        <div className="sign-up-buttons">
                            <button className="submit" onClick={logOut}>Log Out</button>
                        </div>
                    </div>
                </Modal>

            ) : (
                /* ——————————————————————————————————————— Sign Out Modal ——————————————————————————————————————— */
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    closeTimeoutMS={300}
                    onRequestClose={closeModal}
                    className="sign-up-modal"
                    overlayClassName="modal-overlay"
                    contentLabel="Sign Up or Log In">
                    <div className="sign-up-content">

                        <div className="modal-title">
                            <h1>Sign Up or Log In</h1>
                        </div>
                        <div className="inputs">
                            <h1 className="text-tag-label">Your Username</h1>
                            <input className="editor sign-up-user" value={Username} onChange={inputEChange} type="text" spellCheck={false} placeholder="Username..."></input>
                            <h1 className="text-tag-label">Your Password</h1>
                            <input className="editor sign-up-password" value={Password} onChange={inputPChange} type="password" maxLength={200} placeholder="Password..."></input>
                        </div>
                        <div className="sign-up-buttons">
                            <button className="submit" onClick={addUser}>Submit</button>
                        </div>

                    </div>
                </Modal>
            )}

        </div>
    )
}

export default SignUpBurger