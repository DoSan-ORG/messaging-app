import "./App.css";
import { useSelector } from 'react-redux'
import RootLayout from './pages/Root'
import { useEffect } from 'react'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/css/theme.min.css'
import './assets/js/theme.min.js'
import './assets/vendor/bootstrap/bootstrap.bundle.min.js'
import './assets/vendor/swiper/swiper-bundle.min.js'
import './assets/vendor/swiper/swiper-bundle.min.css'

function App() {
  const theme = useSelector(state => state.theme.theme);

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#0b0f19' : 'white';
  }, [theme]);

  return <RootLayout />
}

export default App;