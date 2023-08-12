import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import { auth } from "../firebase";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    deleteDoc,
    getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';
import Message from './Message';
import SendMessage from './SendMessage';

function ChatMessages() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    const [activeContactData, setActiveContactData] = useState(null);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, 'messages'),
            orderBy('createdAt', 'desc'),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedMessages = [];
            querySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });

        return () => unsubscribe();
    }, []);

s
  useEffect(() => {
    const fetchContacts = async () => {
      const q = collection(db, 'users');
      const querySnapshot = await getDocs(q);
      const fetchedContacts = querySnapshot.docs.map((doc) => doc.data());
      setContacts(fetchedContacts);
    };

    fetchContacts();
  }, []);

    const handleClearChat = async () => {
        try {
            const q = query(collection(db, 'messages'));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });
        } catch (error) {
            console.error('Error clearing chat: ', error);
        }
    };
    return (
        <div className="col-md-8 col-lg-9 pb-5 mb-lg-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 mt-md-2 pt-md-4 pb-md-2">
                <div className="row g-0 border rounded-3 shadow-sm position-relative overflow-hidden">
                    <div className="col-lg-4">
                        <div
                            id="contactsList"
                            className="offcanvas-lg offcanvas-start position-absolute position-lg-relative h-100 bg-secondary shadow-none border-end"
                            data-bs-scroll="true"
                            data-bs-backdrop="false"
                            style={{ maxHeight: '712px' }}
                        >
                            <div className="card-header w-100 border-0 p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0">Messages</h1>
                                    <button
                                        type="button"
                                        className="btn btn-link nav-link bg-faded-primary-hover d-lg-none py-2 ps-2 pe-3 me-n3"
                                        data-bs-dismiss="offcanvas"
                                        data-bs-target="#contactsList"
                                    >
                                        <i className="bx bx-x fs-xl me-1"></i>
                                        <span className="d-none d-xl-inline">Close</span>
                                    </button>
                                </div>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        className="form-control pe-5"
                                        placeholder="Search"
                                    />
                                    <i className="bx bx-search fs-xl text-nav position-absolute top-50 end-0 translate-middle-y me-3"></i>
                                </div>
                            </div>
                            <div className="swiper-wrapper">
                                <Scrollbar
                                    damping={0.1}
                                    thumbMinSize={20}
                                    renderByPixels={true}
                                    continuousScrolling={true}
                                >
                                    
                                    {contacts
        .filter((contact) => contact.displayName !== auth.currentUser.displayName) // Filter out your own profile
        .map((contact, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4"
                                        >
                                            <img
                                                src={contact.photoURL}
                                                className="rounded-circle"
                                                width="40"
                                                alt={contact.displayName}
                                            />
                                            <div className="w-100 ps-2 ms-1">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0 me-2">
                                                        {contact.displayName}
                                                    </h6>
                                                    <span className="fs-xs text-muted">
                                                        18:02
                                                    </span>
                                                </div>
                                                <p className="fs-sm text-body mb-0">
                                                    Typing..
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </Scrollbar>
                            </div>
                            <div className="swiper-scrollbar end-0"></div>
                        </div>
                    </div>
                    {/* chat box */}
                    <div className="col-lg-8" style={{ maxHeight: '712px' }}>
                        <div className="card h-100 border-0 bg-transparent pb-3">
                            <div className="navbar card-header d-flex align-items-center justify-content-between w-100 p-sm-4 p-3">
                                <div className="d-flex align-items-center pe-3">
                                    {activeContactData && (
                                        <>
                                            <img
                                                src={activeContactData.avatar}
                                                className="rounded-circle"
                                                width="40"
                                                alt={activeContactData.displayName}
                                            />
                                            <h6 className="mb-0 px-1 mx-2">
                                                {activeContactData.displayName}
                                            </h6>
                                            <div
                                                className="bg-success rounded-circle"
                                                style={{ width: '8px', height: '8px' }}
                                            ></div>
                                        </>
                                    )}
                                </div>
                                <div className="d-flex">
                                    <div className="dropdown me-sm-2">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary px-2 px-sm-3"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="bx bx-dots-horizontal-rounded fs-xl mx-1 mx-sm-0 me-xl-2"></i>
                                            <span className="d-none d-xl-inline">More</span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end my-1">
                                            <a href="#" className="dropdown-item">
                                                View profile
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Disable notifications
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Edit contact
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Delete contact
                                            </a>
                                            <a onClick={handleClearChat} href="#" className="dropdown-item">
                                                Delete chat
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Clear history
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Block user
                                            </a>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleClearChat}
                                        className="btn btn-outline-danger d-none d-sm-inline-flex px-2 px-sm-3 ms-1"
                                    >
                                        <i className="bx bx-trash-alt fs-xl me-xl-2"></i>
                                        <span className="d-none d-xl-inline">Clear chat</span>
                                    </button>
                                </div>
                            </div>
                            <Scrollbar
                                damping={0.1}
                                thumbMinSize={50}
                                renderByPixels={true}
                                continuousScrolling={true}
                                ref={scroll}
                            >
                                {messages?.map((message) => (
                                    <Message key={message.id} message={message} />
                                ))}
                            </Scrollbar>
                            <SendMessage scroll={scroll} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMessages;
