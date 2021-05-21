import React from 'react';
import About from '../component/About';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import Contacts from '../component/Contacts'
import {Route} from "react-router-dom"

const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Home />
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/contacts" exact>
                    <Contacts/>
                </Route>

            </main>
        </>


    );
};

export default App;