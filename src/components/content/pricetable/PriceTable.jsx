import React, {useState} from "react"
import { Link } from 'react-router-dom'
// components
import PriceTableAdults from '@pricetable/priceTableAdults/PriceTableAdults.jsx'
import PriceTableChildren from '@pricetable/priceTableChildren/PriceTableChildren.jsx'
// style
import "./priceTable.scss"


export default function PriceTable() {

    const [priceTableSection, setpriceTableSection] = useState('children');
   
    return (
        <section className="price-table">

            <div className="price-table-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <span>Цены</span>
            </div>

            <h1 className="price-table-title">Цены</h1>

            <div className="price-table-navbar">
                <button 
                    onClick={() => setpriceTableSection('children')} 
                    className={priceTableSection === 'children' ? "chosen" : "unchosen"}>
                    Дети
                </button>

                <button 
                    onClick={() => setpriceTableSection('adults')} 
                    className={priceTableSection === 'adults' ? "chosen" : "unchosen"}>
                    Взрослые
                </button>
            </div>

            {priceTableSection === 'children' ? <PriceTableChildren /> : <PriceTableAdults />}

            <aside className="price-table-add-info">
                <p>*"Безлимит" (любое количество тренировок в любые дни в течении месяца)</p>
                <p>*Информация, указанная в данном разделе, может быть изменена. 
                Пожалуйста, уточняйте информацию по телефону: +7-985-001-75-05</p>
            </aside>
            
        </section>
    )
}