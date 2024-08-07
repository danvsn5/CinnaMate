import Modal from "react-modal"
import { useState } from "react";
import { useEffect } from "react";
Modal.setAppElement('#root');
import db from "../../../firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateGlobalState } from "../utils/AccountHook";

const SignUp = () => {
    // sets the desktop useState
    const [isDesktop, setDesktop] = useState(window.innerWidth < 1059);


    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const inputEChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }
    const inputPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const updateMedia = () => {
        setDesktop(window.innerWidth < 1059);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    const searchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (Password != "" && Username != "" && e.key == "Enter") {
            addUser();
        }
    }

    /* ———————————————————————————————————————— Local Storage ——————————————————————————————————————— */

    useEffect(() => {
        // Load logged-in state from localStorage
        const savedState = localStorage.getItem("loggedInState");
        if (savedState) {
            const parsedState: globalUserVariables = JSON.parse(savedState);
            globalThis.loggedInState = parsedState;
            setUsername(parsedState.username);
            setPassword(parsedState.password);
            updateGlobalState();
        }
    }, []);

    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    /*                                          Modal Methods                                         */
    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
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

    /* ———————————————————————————————————————— Alert Modals ———————————————————————————————————————— */

    const [openLogSuccess, setLogSuccess] = useState(false);

    function openLogSuccessFunction() {
        setLogSuccess(true);
    }
    function afterOpen() {
        // references are now sync'd and can be accessed.
    }
    function closeLogSuccessFunction() {
        setLogSuccess(false);
    }

    const [openSignSuccess, setSignSuccess] = useState(false);

    function openSignSuccessFunction() {
        setSignSuccess(true);
    }
    function afterSign() {
        // references are now sync'd and can be accessed.
    }
    function closeSignSuccessFunction() {
        setSignSuccess(false);
    }

    const [openLogFail, setLogFail] = useState(false);

    function openLogFailFunction() {
        setLogFail(true);
    }
    function afterLog() {
        // references are now sync'd and can be accessed.
    }
    function closeLogFailFunction() {
        setLogFail(false);
    }

    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    /*                                         Add User Method                                        */
    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    async function addUser() {

        const data = {
            username: Username,
            password: Password,
            movies: {
                favourites: {},
                seen: {},
                watchlist: {},
                tags: {}
            },
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
                openLogFailFunction()
                // if user exists and password is correct, you are now logged in and the log in button changes
            } else if (!!userRef.exists() && Password == dbPassword) {
                setIsOpen(false);
                // set the logged in status to true
                // sets the logged in GLOBAL STATE to true
                globalThis.loggedInState = { isLoggedIn: true, username: `${Username}`, password: `${Password}` };
                updateGlobalState();
                // shows the successfully logged in modal
                localStorage.setItem("loggedInState", JSON.stringify(globalThis.loggedInState));
                openLogSuccessFunction()

            } else if (!userRef.exists()) {
                // Add a new user to collection named as their username, containing their username and their password
                await setDoc(doc(db, "users", `${Username}`), data);
                setIsOpen(false);
                // set the logges in status to true
                // sets the logged in GLOBAL STATE to true
                globalThis.loggedInState = { isLoggedIn: true, username: `${Username}`, password: `${Password}` };
                localStorage.setItem("loggedInState", JSON.stringify(globalThis.loggedInState));
                updateGlobalState();
                openSignSuccessFunction();
            }
        }
    }

    /* —————————————————————————————————— Change Rendered Elements —————————————————————————————————— */

    // based on whether or not the user is logged in, change the visual style of the log in
    // button to log out symbol


    async function logOut() {

        setIsOpen(false)

        setTimeout(() => {

            setUsername("")
            setPassword("")

        }, 350);

        // sets the logged in GLOBAL STATE to false and resets the username
        globalThis.loggedInState = { isLoggedIn: false, username: "", password: "" };
        updateGlobalState();
        localStorage.removeItem("loggedInState");
        window.location.reload()
    }

    return (
        <div>
            {isDesktop ? (
                <span></span>
            ) : (
                <button className="navbar-button sign-up-button" onClick={openModal}>

                    {loggedInState.isLoggedIn ? (
                        <i id="sign-up-icon" className="icon fa-solid fa-right-from-bracket exp-icon"></i>
                    ) : (
                        <i id="sign-up-icon" className="icon fa-solid fa-user-plus exp-icon"></i>
                    )}

                </button>
            )}


            {loggedInState.isLoggedIn ? (
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
                            <input className="editor sign-up-user" value={Username} onChange={inputEChange} type="text" spellCheck={false} placeholder={loggedInState.username} readOnly={true}></input>
                            <h1 className="text-tag-label">Your Password Details</h1>
                            <input className="editor sign-up-password" value={Password} onChange={inputPChange} maxLength={200} placeholder={loggedInState.password} readOnly={true}></input>
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
                            <input className="editor sign-up-password" value={Password} onChange={inputPChange} type="password" maxLength={200} placeholder="Password..." onKeyDown={searchEnter}></input>
                        </div>
                        <div className="sign-up-buttons">
                            <button className="submit" onClick={addUser}>Submit</button>
                        </div>

                    </div>
                </Modal>
            )}

            <Modal
                isOpen={openLogSuccess}
                onAfterOpen={afterOpen}
                closeTimeoutMS={300}
                onRequestClose={closeLogSuccessFunction}
                className="after-input"
                overlayClassName="modal-overlay"
                contentLabel="Log In Successful">
                <div className="sign-up-content after">
                    <div className="modal-title">
                        <h1>Success!</h1>
                    </div>
                    <div className="after-content">
                        <h1 className="text-tag-label after-label">You have logged in successfully!</h1>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={openSignSuccess}
                onAfterOpen={afterSign}
                closeTimeoutMS={300}
                onRequestClose={closeSignSuccessFunction}
                className="after-input"
                overlayClassName="modal-overlay"
                contentLabel="Sign Up Successful">
                <div className="sign-up-content after">
                    <div className="modal-title">
                        <h1>Success</h1>
                    </div>
                    <div className="after-content">
                        <h1 className="text-tag-label after-label">You have signed up successfully!</h1>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={openLogFail}
                onAfterOpen={afterLog}
                closeTimeoutMS={300}
                onRequestClose={closeLogFailFunction}
                className="after-input"
                overlayClassName="modal-overlay"
                contentLabel="Account Failure">
                <div className="sign-up-content after">
                    <div className="modal-title">
                        <h1>Failure</h1>
                    </div>
                    <div className="after-content">
                        <h1 className="text-tag-label after-label">Either your password was incorrect or an account already exists with this username</h1>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default SignUp