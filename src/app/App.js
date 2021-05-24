import React, { useEffect } from 'react';
import About from '../component/About';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import Contacts from '../component/Contacts';
import Kurs from '../component/Kurs';
import Footer from '../component/Footer'
import { Route } from "react-router-dom"
import AOS from "aos"

const App = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    })
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/kurs" exact>
                    <Kurs />
                </Route>
                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
                <Route path="/footer" exact>
                    <Footer />
                </Route>


            </main>
        </>


    );
};

export default App;