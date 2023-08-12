import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    setMessage("");

  };

  return (
    <div>
      <div className="card-footer d-sm-flex w-100 border-0 pt-3 pb-3 px-4">
        <form
          onSubmit={(event) => sendMessage(event)}
          className="position-relative w-100 me-2 mb-3 mb-sm-0"
        >
          <input
            id="messageInput"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="messageInput"
            type="text"
            className="form-control form-input__input form-control-lg"
            style={{ paddingRight: '85px' }}
          />
          <div className="position-absolute top-50 end-0 translate-middle-y d-flex zindex-3 me-2">
            <button
              type="button"
              className="btn btn-icon btn-sm btn-link nav-link bg-faded-primary-hover me-1"
            >
              <i className="bx bx-paperclip fs-4"></i>
            </button>
            <button
              type="button"
              className="btn btn-icon btn-sm btn-link nav-link bg-faded-primary-hover"
            >
              <i className="bx bx-smile fs-4"></i>
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-icon btn-lg d-none d-sm-inline-flex ms-1"
            >
              <i className="bx bx-send"></i>
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 d-sm-none"
            >
              <i className="bx bx-send fs-xl me-2"></i>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
