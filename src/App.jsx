import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './components/About'
import { AppProvider } from './context/context'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'



const App = () => {
    return (
        <>
        <AppProvider>
        <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/book' element={<BookList />} />
                    <Route path='/book/:id' element={<BookDetails />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/*' element={<ErrorPage />} />
                </Routes>
                <Footer />
            </Router>
        </AppProvider>
            


        </>
    )
}

export default App
