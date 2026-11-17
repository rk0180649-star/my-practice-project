import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Service from '../components/Service';
import Contact from '../components/Contact';
import Projectlink from '../components/Projectlink';

const Home = () =>{
    return(
        <div>
            <Hero />
            <Skills />
            <Projectlink />
            <Service />
            <Contact />
        </div>
        
    );
}

export default Home;