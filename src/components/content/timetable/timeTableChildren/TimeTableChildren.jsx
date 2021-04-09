import React, {useState} from "react"

// style
import "./timeTableChildren.scss"

export default function TimeTableChildren() {

    const [weekTime, setweekTime] = useState('start');
   
    return (
        <>
            <div className="time-table-children-chosen-days">
                <button 
                    onClick={() => setweekTime('start')} 
                    className={weekTime === 'start' ? "children-day-chosen" : "children-day-unchosen"}>
                    пн - вт - ср
                </button>

                <button 
                    onClick={() => setweekTime('end')} 
                    className={weekTime === 'end' ? "children-day-chosen" : "children-day-unchosen"}>
                    чт - пт - сб
                </button>
            </div>
            
            <table className="time-table-children" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">ПН</th>
                        <th className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">ВТ</th>
                        <th className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">СР</th>
                        <th className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">ЧТ</th>
                        <th className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">ПТ</th>
                        <th className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">СБ</th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Развивающая гимнастика</h4>
                            <p>2-3 года</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>11.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>11.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Развивающая гимнастика и ОФП</h4>
                            <p>3-4 года</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика</h4>
                            <p>5-9 лет</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 - Зал № 1</p>
                            <p>Хореография</p>
                            <p>Акробатика</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика</h4>
                            <p>Сборная команда</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00</p>
                            <p>Зал № 1</p>
                        </td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}