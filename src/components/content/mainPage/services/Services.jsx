import React, {useEffect, useState} from 'react'
// data
import servicesList from '@data/services.js'
// components
import ServiceEl from '@mainPage/services/serviceEl/ServiceEl.jsx'
//styles
import "./services.scss"

function Services() {

    const [servicesSection, setServicesSection] = useState(() => {
        if(!localStorage.getItem('servicesSection')) return 'children';        
        return localStorage.getItem('servicesSection');
    });

    let chosenSection = servicesSection === 'children' ? servicesList.children : servicesList.adults;

    useEffect(() => {
        localStorage.setItem('servicesSection', servicesSection);
    }, [servicesSection]);

    useEffect(() => {
        setServicesSection(localStorage.getItem('servicesSection'))
    }, []);

    return (
        <section className="services" id="services">

            <h1 className="services-title">Услуги</h1>

            <div className="services-navbar">
                <button 
                    onClick={() => setServicesSection('children')} 
                    className={servicesSection === 'children' ? "chosen" : "unchosen"}>
                    Дети
                </button>

                <button 
                    onClick={() => setServicesSection('adults')} 
                    className={servicesSection === 'adults' ? "chosen" : "unchosen"}>
                    Взрослые
                </button>
            </div>

            <div className="services-items">

                {chosenSection.map(service => { 
                    return <ServiceEl service={service} key={service.id}/>}
                )}

            </div>

        </section>
    )

}

export default Services;