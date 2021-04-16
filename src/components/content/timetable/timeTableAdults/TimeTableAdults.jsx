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
                        <th className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">Пн</th>
                        <th className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">Вт</th>
                        <th className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">Ср</th>
                        <th className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">Чт</th>
                        <th className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">Пт</th>
                        <th className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">Сб</th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Пилатес</h4>
                            <p>Тренер Жанна</p>
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
                            <p>Тренер Виктория</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>11.00</p>
                            <p>Зал № 2</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Тай бо</h4>
                            <p>Тренер Виктория</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Зумба</h4>
                            <p>Тренер Кристина</p>
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
                            <p>Тренер Жанна</p>
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
                            <p>Тренер Лидия</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>20.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Дэнсхолл</h4>
                            <p>Тренер Лидия</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>13.00</p>
                            <p>Зал № 1</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Шейпинг/Суставная гимнастика</h4>
                            <p>Тренер Марина</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>19.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Lady Dance</h4>
                            <p>Тренер Лидия</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">
                            <p>20.00</p>
                        </td>
                        <td className={weekTime === 'end' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                        <td className={weekTime === 'start' ? 'time-table-adults-hidden' : ''} align="center">-</td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}