import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import avatar20 from '../assets/images/avatar/20.jpg';
import Scrollbar from 'react-smooth-scrollbar';

function Message({ message }) {
  const [user] = useAuthState(auth);
  return (
    <div>
      {/* ito yung mga may messages */}
     
      <div className="swiper-wrapper">
        <div className="swiper-slide v-auto">
          <div className="fs-sm text-muted text-center mb-3">November 27, 2025</div>
          <div className="d-flex align-items-start mb-3">
            <img src={avatar20} className="rounded-circle" width="40" alt="Albert Flores" />
            <div className="ps-2 ms-1" style={{ maxwidth: '348px' }}>
              <div className="bg-secondary p-3 mb-1"
                style={{
                  borderTopRightRadius: '.5rem',
                  borderBottomRightRadius: '.5rem',
                  borderBottomLeftRadius: '.5rem'
                }}>Tellus, ipsum, commodo, dui ac. Ultrices mi arcu orci aliquam et.</div>
              <div className="fs-sm text-muted">09:04 am</div>
            </div>
          </div>

          <div className="d-flex align-items-start justify-content-end mb-3">
            <div className="pe-2 me-1" style={{ maxwidth: '348px' }}>
              <div className="bg-primary text-light p-3 mb-1" style={{
                borderTopRightRadius: '.5rem',
                borderBottomRightRadius: '.5rem',
                borderBottomLeftRadius: '.5rem'
              }}><div className="chat-bubble__right">
                  {message.text}
                </div></div>

              <div className="d-flex justify-content-end align-items-center fs-sm text-muted">
                10:36 am
                <i className="bx bx-check-double fs-xl text-primary ms-2"></i>
              </div>
            </div>
            <img src={message.avatar} className="rounded-circle" width="40" alt="Albert Flores" />
          </div>

          <div className="d-flex align-items-start mb-3">
            <img src={avatar20} className="rounded-circle" width="40" alt="Albert Flores" />
            <div className="ps-2 ms-1" style={{ maxwidth: '348px' }}>
              <div className="bg-secondary p-3 mb-1"
                style={{
                  borderTopRightRadius: '.5rem',
                  bosrderBottomRightRadius: '.5rem',
                  borderBottomLeftRadius: '.5rem'
                }}>Blandit tempus, erat cum amet viverra pharetra, morbi. Vivamus pretium tristique amet, nulla aenean sed blandit?</div>
              <div className="fs-sm text-muted">14:48 pm</div>
            </div>
          </div>

          <div className="d-flex align-items-start justify-content-end mb-3">
            <div className="pe-2 me-1" style={{ maxwidth: '348px' }}>
              <div className="bg-primary text-light p-3 mb-1" style={{
                borderTopRightRadius: '.5rem',
                borderBottomRightRadius: '.5rem',
                borderBottomLeftRadius: '.5rem'
              }}>Vel enim lacus, ac, fermentum, id. Aliquet faucibus pellentesque egestas.</div>
              <div className="bg-primary text-light p-3 mb-1" style={{
                borderTopRightRadius: '.5rem',
                borderBottomRightRadius: '.5rem',
                borderBottomLeftRadius: '.5rem'
              }}>Thank you!</div>
              <div className="d-flex justify-content-end align-items-center fs-sm text-muted">
                16:29 pm
                <i className="bx bx-check fs-xl text-primary ms-2"></i>
              </div>
            </div>
            <img src={message.avatar} className="rounded-circle" width="40" alt="Albert Flores" />
          </div>

          <div className="fs-sm text-muted text-center mb-3">November 28, 2021</div>

          <div className="d-flex align-items-start mb-3">
            <img src={avatar20} className="rounded-circle" width="40" alt="Albert Flores" />
            <div className="ps-2 ms-1" style={{ maxwidth: '348px' }}>
              <div className="bg-secondary p-3 mb-1" style={{
                borderTopRightRadius: '.5rem',
                borderBottomRightRadius: '.5rem',
                borderBottomLeftRadius: '.5rem'
              }}>You are welcome 😊</div>
              <div className="fs-sm text-muted">17:33 pm</div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-scrollbar end-0"></div>
    </div>
  );
};

export default Message;