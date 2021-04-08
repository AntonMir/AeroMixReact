import React, {useState} from "react"

// style
import "./timeTableAdults.scss"

export default function TimeTableAdults() {

    const [weekTime, setweekTime] = useState('start');
   
    return (
        <>
            <div className="time-table-chosen-days">
                <button 
                    onClick={() => setweekTime('start')} 
                    className={weekTime === 'start' ? "day-chosen" : "day-unchosen"}>
                    пн - вт - ср
                </button>

                <button 
                    onClick={() => setweekTime('end')} 
                    className={weekTime === 'end' ? "day-chosen" : "day-unchosen"}>
                    чт - пт - сб
                </button>
            </div>
            
            <table className="time-table-adults" cellSpacing="2">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">ПН</th>
                        <th className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">ВТ</th>
                        <th className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">СР</th>
                        <th className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">ЧТ</th>
                        <th className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">ПТ</th>
                        <th className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">СБ</th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Развивающая гимнастика</h4>
                            <p>2-3 года</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>11.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center"></td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>11.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center"></td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center"></td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center"></td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Развивающая гимнастика и ОФП</h4>
                            <p>3-4 года</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>18.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>18.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center"></td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика</h4>
                            <p>5-9 лет</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00 - Зал № 1</p>
                            <p>Хореография</p>
                            <p>Акробатика</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center"></td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика</h4>
                            <p>Сборная команда</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-hidden' : ''} align="center">
                            <p>18.00</p>
                            <p>Зал № 1</p>
                        </td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}