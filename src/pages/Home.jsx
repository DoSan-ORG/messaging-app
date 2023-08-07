import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SideBar from "../components/SideBar";
import SignIn from "../components/User/SignIn";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {!user ? (
        <SignIn />
      ) : (
        <>
          <SideBar />
        </>
      )}
    </div>
  );
};

export default Home;