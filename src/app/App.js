import React, { useEffect } from 'react';
import About from '../component/About';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import Contacts from '../component/Contacts';
import Kurs from '../component/Kurs';
import Happyday from '../component/happyday'
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
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/kurs" exact>
                    <Kurs />
                </Route>

                <Route path="/happyday" exact>
                    <Happyday />
                </Route>

                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
                <footer>   <Footer /></footer>




            </main>
        </>


    );
};

export default App;