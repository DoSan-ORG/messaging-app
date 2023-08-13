import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useRef, useState } from 'react';
function Message({ message, scroll}) {
  const [user] = useAuthState(auth);
  const isMyMessage = user && message.uid === user.uid;

  const messageWrapperClass = isMyMessage
    ? 'd-flex align-items-start justify-content-end mb-3'
    : 'd-flex align-items-start mb-3';

  const messageBubbleClass = isMyMessage
    ? 'bg-primary text-light p-3 mb-1'
    : 'bg-secondary p-3 mb-1';

  const textAlignment = isMyMessage ? 'text-right' : '';

  const checkIcon = isMyMessage ? (
    <i className="bx bx-check-double fs-xl text-primary ms-2"></i>
  ) : null;
  
  const messageDate = message.createdAt ?  new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'}).format(message.createdAt): '';
  const messageTime = message.createdAt ? new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(message.createdAt): '';

  useEffect(() => {
    if (scroll.current && scroll.current.scrollbar) {
        scroll.current.scrollbar.scrollTo(0, scroll.current.scrollbar.limit.y, 0);
    }
}, [scroll, message]);

  return (
    <div>
      {/* ito yung mga may messages */}
      <div className="swiper-wrapper">
        <div className="swiper-slide v-auto">
          <div className="fs-sm text-muted text-center mb-3">{messageDate}</div>
          <div className={messageWrapperClass}>
            {!isMyMessage && (
              <img src={message.avatar} className="rounded-circle" width="40" alt="Other User" />
            )}
            <div
              className="pe-2 me-1"
              style={{
                maxWidth: '348px'
              }}
            >
              <div className={messageBubbleClass}>
                <div className={`chat-bubble__${isMyMessage ? 'right' : 'left'}`}>
                  {message.text}
                </div>
              </div>
              <div className={`d-flex justify-content-end align-items-center fs-sm text-muted ${textAlignment}`}>
                {messageTime}
                {checkIcon}
              </div>
            </div>
            {isMyMessage && (
              <img src={message.avatar} className="rounded-circle" width="40" alt={message.name} />
            )}
          </div>
        </div>
      </div>
      <div className="swiper-scrollbar end-0"></div>
    </div>
  );
}

export default Message;
