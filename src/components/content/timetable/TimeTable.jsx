import React, {useState} from "react"
// components
import TimeTableAdults from '@timetable/timeTableAdults/TimeTableAdults.jsx'
import TimeTableChildren from '@timetable/timeTableChildren/TimeTableChildren.jsx'

// style
import "./timeTable.scss"


export default function TimeTable() {

    const [timeTableSection, setTimeTableSection] = useState('children');
   
    return (
        <section className="time-table">

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

        </section>
    )
}