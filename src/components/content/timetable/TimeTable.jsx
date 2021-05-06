import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
// components
import TimeTableAdults from '@timetable/timeTableAdults/TimeTableAdults.jsx'
import TimeTableChildren from '@timetable/timeTableChildren/TimeTableChildren.jsx'
// style
import "./timeTable.scss"


export default function TimeTable() {

    const [timeTable, setTimeTable] = useState(localStorage.getItem('timeTable'));

    if(!timeTable) {
        setTimeTable('children')
    }

    useEffect(() => {
        localStorage.setItem('timeTable', timeTable);
    }, [timeTable]);

    useEffect(() => {
        setTimeTable(localStorage.getItem('timeTable'))
    }, []);

   
    return (
        <section className="time-table">

            <div className="time-table-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <span>Расписание</span>
            </div>

            <h1 className="time-table-title">Расписание</h1>

            <div className="time-table-navbar">
                <button 
                    onClick={() => setTimeTable('children')} 
                    className={timeTable === 'children' ? "chosen" : "unchosen"}>
                    Дети
                </button>

                <button 
                    onClick={() => setTimeTable('adults')} 
                    className={timeTable === 'adults' ? "chosen" : "unchosen"}>
                    Взрослые
                </button>
            </div>

            {timeTable === 'children' ? <TimeTableChildren /> : <TimeTableAdults />}

            <aside className="time-table-add-info">
                *Информация, указанная в данном разделе, может быть изменена. 
                Пожалуйста, уточняйте информацию по телефону: +7-985-001-75-05
            </aside>

        </section>
    )
}