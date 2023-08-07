
import avatar19 from '../assets/images/avatar/19.jpg';
import avatar20 from '../assets/images/avatar/20.jpg';
import avatar21 from '../assets/images/avatar/21.jpg';
import avatar22 from '../assets/images/avatar/22.jpg';
import avatar23 from '../assets/images/avatar/23.jpg';
import avatar24 from '../assets/images/avatar/24.jpg';
import avatar25 from '../assets/images/avatar/25.jpg';
import avatar26 from '../assets/images/avatar/26.jpg';
import avatar27 from '../assets/images/avatar/27.jpg';
import avatar28 from '../assets/images/avatar/28.jpg';
import Scrollbar from 'react-smooth-scrollbar';
import React, { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
function ChatMessages() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    }, []);
    return (
        <div className="col-md-8 col-lg-9 pb-5 mb-lg-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 mt-md-2 pt-md-4 pb-md-2">
                <div className="row g-0 border rounded-3 shadow-sm position-relative overflow-hidden">

                    <div className="col-lg-4">
                        <div id="contactsList" className="offcanvas-lg offcanvas-start position-absolute position-lg-relative h-100 bg-secondary shadow-none border-end" data-bs-scroll="true" data-bs-backdrop="false"
                            style={{ maxHeight: '712px' }}>
                            <div className="card-header w-100 border-0 p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0">Messages</h1>
                                    <button type="button" className="btn btn-link nav-link bg-faded-primary-hover d-lg-none py-2 ps-2 pe-3 me-n3" data-bs-dismiss="offcanvas" data-bs-target="#contactsList">
                                        <i className="bx bx-x fs-xl me-1"></i>
                                        Close
                                    </button>
                                </div>
                                <div className="position-relative">
                                    <input type="text" className="form-control pe-5" placeholder="Search" />
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
                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar19} className="rounded-circle" width="40" alt="Devon Lane" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Devon Lane</h6>
                                                <span className="fs-xs text-muted">18:02</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Dolor, quam habitant...</p>
                                        </div>
                                    </a>

                                    <a href="#" className="position-relative d-flex align-items-start border-bottom text-decoration-none bg-light pe-none py-3 px-4">
                                        <div className="position-absolute top-0 start-0 bg-primary w-2 h-100"></div>
                                        <img src={avatar20} className="rounded-circle" width="40" alt="Albert Flores" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Albert Flores</h6>
                                                <span className="fs-xs text-muted">17:33</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">You are welcome 😊</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar21} className="rounded-circle" width="40" alt="Bessie Cooper" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Bessie Cooper</h6>
                                                <span className="fs-xs text-muted">12:04</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Typing...</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar22} className="rounded-circle" width="40" alt="Ronald Richards" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Ronald Richards</h6>
                                                <span className="fs-xs text-muted">08:00</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Ok 👌</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar23} className="rounded-circle" width="40" alt="Robert Fox" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Robert Fox</h6>
                                                <span className="fs-xs text-muted">14 Nov</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Praesent ut mi.</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar24} className="rounded-circle" width="40" alt="Jerome Bell" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Jerome Bell</h6>
                                                <span className="fs-xs text-muted">8 Oct</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">In pretium a eget nunc...</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar25} className="rounded-circle" width="40" alt="Kathryn Murphy" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Kathryn Murphy</h6>
                                                <span className="fs-xs text-muted">16 Sep</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Tempor amet?</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar26} className="rounded-circle" width="40" alt="Dianne Russell" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Dianne Russell</h6>
                                                <span className="fs-xs text-muted">27 Aug</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Vehicula accumsan leo.</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start border-bottom text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar27} className="rounded-circle" width="40" alt="Cody Fisher" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Cody Fisher</h6>
                                                <span className="fs-xs text-muted">18 Aug</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Erat cum amet viverra...</p>
                                        </div>
                                    </a>

                                    <a href="#" className="d-flex align-items-start text-decoration-none bg-faded-primary-hover py-3 px-4">
                                        <img src={avatar28} className="rounded-circle" width="40" alt="Darlene Robertson" />
                                        <div className="w-100 ps-2 ms-1">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h6 className="mb-0 me-2">Darlene Robertson</h6>
                                                <span className="fs-xs text-muted">13 Jul</span>
                                            </div>
                                            <p className="fs-sm text-body mb-0">Orci convallis eget sit...</p>
                                        </div>
                                    </a>
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
                                    <button type="button" className="navbar-toggler d-lg-none me-3" data-bs-toggle="offcanvas" data-bs-target="#contactsList" aria-controls="contactsList" aria-label="Toggle contacts list">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <img src={avatar20} className="rounded-circle" width="40" alt="Albert Flores" />
                                    <h6 className="mb-0 px-1 mx-2">Albert Flores</h6>
                                    <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                                </div>
                                <div className="d-flex">
                                    <div className="dropdown me-sm-2">
                                        <button type="button" className="btn btn-outline-primary px-2 px-sm-3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-dots-horizontal-rounded fs-xl mx-1 mx-sm-0 me-xl-2"></i>
                                            <span className="d-none d-xl-inline">More</span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end my-1">
                                            <a href="#" className="dropdown-item">View profile</a>
                                            <a href="#" className="dropdown-item">Disable notifications</a>
                                            <a href="#" className="dropdown-item">Edit contact</a>
                                            <a href="#" className="dropdown-item">Delete contact</a>
                                            <a href="#" className="dropdown-item">Delete chat</a>
                                            <a href="#" className="dropdown-item">Clear history</a>
                                            <a href="#" className="dropdown-item">Block user</a>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-danger d-none d-sm-inline-flex px-2 px-sm-3 ms-1">
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
                            >
                                {messages?.map((message) => (
                                    <Message key={message.id} message={message} />
                                ))}</Scrollbar>
                            <SendMessage />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ChatMessages;