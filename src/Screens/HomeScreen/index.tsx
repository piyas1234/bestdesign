import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import NavSection from '../../components/Nav/NavSection';
import Pakeges from '../../components/Pakeges';
import './home.css'
const HomeScreen =()=> {
    return (
        <div className="main">
           <NavSection/> 
           <Hero/>
           <Pakeges/>
           <Footer/>
        </div>
    );
}

export default HomeScreen;


