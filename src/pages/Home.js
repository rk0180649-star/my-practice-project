import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Service from '../components/Service';
import Contact from '../components/Contact';

const Home = () =>{
    return(
        <div>
            <Hero />
            <Skills />
            <Service />
            <Contact />
        </div>
        
    );
}

export default Home;