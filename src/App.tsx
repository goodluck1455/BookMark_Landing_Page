import MainPage from "./assets/Pages/MainPage"
import Header from "./assets/Layout/Header"
import Features from "./assets/Pages/Features"
import Extentions from "./assets/Pages/Extentions"
import AskQuestions from "./assets/Pages/AskQuestions"
import Footer from "./assets/Layout/Footer"
import {   BrowserRouter } from 'react-router-dom';

function App() {
 

  return (
    <>
  <BrowserRouter>
    <Header />
    <MainPage />
    <Features />
    <Extentions />
    <AskQuestions />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
