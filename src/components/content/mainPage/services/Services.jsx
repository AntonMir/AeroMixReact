import React, {useState} from 'react'
// data
import servicesList from '@data/services.js'
// components
import ServiceEl from '@mainPage/services/serviceEl/ServiceEl.jsx'
//styles
import "./services.scss"

function Services() {

    const [servicesSection, setServicesSection] = useState('children');

    let chosenSection = servicesSection === 'children' ? servicesList.children : servicesList.adults;
   
    return (
        <section className="services">

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