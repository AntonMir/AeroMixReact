import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
// components
import PriceTableAdults from '@pricetable/priceTableAdults/PriceTableAdults.jsx'
import PriceTableChildren from '@pricetable/priceTableChildren/PriceTableChildren.jsx'
// style
import "./priceTable.scss"


export default function PriceTable() {

    const [priceTable, setPriceTable] = useState(localStorage.getItem('priceTable'));

    if(!priceTable) {
        setPriceTable('children')
    }

    useEffect(() => {
        localStorage.setItem('priceTable', priceTable);
    }, [priceTable]);

    useEffect(() => {
        setPriceTable(localStorage.getItem('priceTable'))
    }, []);

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
                    onClick={() => setPriceTable('children')} 
                    className={priceTable === 'children' ? "chosen" : "unchosen"}>
                    Дети
                </button>

                <button 
                    onClick={() => setPriceTable('adults')} 
                    className={priceTable === 'adults' ? "chosen" : "unchosen"}>
                    Взрослые
                </button>
            </div>

            {priceTable === 'children' ? <PriceTableChildren /> : <PriceTableAdults />}

            <aside className="price-table-add-info">
                <p>*"Безлимит" (любое количество тренировок в любые дни в течении месяца)</p>
                <p>*Информация, указанная в данном разделе, может быть изменена. 
                Пожалуйста, уточняйте информацию по телефону: +7-985-001-75-05</p>
            </aside>
            
        </section>
    )
}