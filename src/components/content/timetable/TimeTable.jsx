import React, {useState} from "react"
import { Link } from 'react-router-dom'
// components
import TimeTableAdults from '@timetable/timeTableAdults/TimeTableAdults.jsx'
import TimeTableChildren from '@timetable/timeTableChildren/TimeTableChildren.jsx'
// style
import "./timeTable.scss"


export default function TimeTable() {

    const [timeTableSection, setTimeTableSection] = useState('children');
   
    return (
        <section className="time-table">

            <div className="time-table-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <span>Рассписание</span>
            </div>

            <h1 className="time-table-title">Рассписание</h1>

            <div className="time-table-navbar">
                <button 
                    onClick={() => setTimeTableSection('children')} 
                    className={timeTableSection === 'children' ? "chosen" : "unchosen"}>
                    Дети
                </button>

                <button 
                    onClick={() => setTimeTableSection('adults')} 
                    className={timeTableSection === 'adults' ? "chosen" : "unchosen"}>
                    Взрослые
                </button>
            </div>

            {timeTableSection === 'children' ? <TimeTableChildren /> : <TimeTableAdults />}

            <aside className="time-table-add-info">
                *Информация, указанная в данном разделе, может быть изменена. 
                Пожалуйста, уточняйте информацию по телефону: +7-985-001-75-05
            </aside>

        </section>
    )
}