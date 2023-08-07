import  { Navigate, Route, Routes } from "react-router-dom";
import Wrapper from '../components/Wrapper';
import HomePage from './Home'
import Header from "../components/Navbar2";
import '../assets/css/theme.min.css'
import '../assets/css/theme.min.css'
import '../assets/js/theme.min.js'
import NotFoundPage from './NotFound';

function RootLayout(){
    const theme = localStorage.getItem('theme');

    return (
        <Wrapper className={`page-wrapper ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
s                    <Route path="/404" element={ <NotFoundPage /> } />
                    <Route path="*" element={ <Navigate to="/404" replace />} />
                </Routes>
            </main>
            {/* <Footer/> */}
        </Wrapper>
    );
}

export default RootLayout;