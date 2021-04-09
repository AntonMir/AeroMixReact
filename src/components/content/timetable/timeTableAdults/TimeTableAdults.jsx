import React, {useState} from "react"

// style
import "./timeTableAdults.scss"

export default function TimeTableAdults() {

    const [weekTime, setweekTime] = useState('start');
   
    return (
        <>
            <div className="time-table-adults-chosen-days">
                <button 
                    onClick={() => setweekTime('start')} 
                    className={weekTime === 'start' ? "adults-day-chosen" : "adults-day-unchosen"}>
                    пн - вт - ср
                </button>

                <button 
                    onClick={() => setweekTime('end')} 
                    className={weekTime === 'end' ? "adults-day-chosen" : "adults-day-unchosen"}>
                    чт - пт - сб
                </button>
            </div>
            
            <table className="time-table-adults" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">ПН</th>
                        <th className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">ВТ</th>
                        <th className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">СР</th>
                        <th className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">ЧТ</th>
                        <th className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">ПТ</th>
                        <th className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">СБ</th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Пилатес</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>09.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>09.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>12.00</p>
                            <p>Зал № 2</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Силовая тренировка</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.00 тюнинг</p>
                            <p>20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.00 тюнинг</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Йога</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>09.30</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Зумба</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>10.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>10.00</p>
                            <p>Strong by Zumba</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.30</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Стретчинг</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Бачата</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.30</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Дэнсхолл</h4>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>11.00</p>
                        </td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}