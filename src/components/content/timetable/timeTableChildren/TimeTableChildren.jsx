import React, {useState, useEffect} from "react"

// style
import "./timeTableChildren.scss"

export default function TimeTableChildren() {

    const [timeTableChildren, settimeTableChildren] = useState(localStorage.getItem('timeTableChildren'));

    if(!timeTableChildren) {
        settimeTableChildren('start')
    }

    useEffect(() => {
        localStorage.setItem('timeTableChildren', timeTableChildren);
    }, [timeTableChildren]);

    useEffect(() => {
        settimeTableChildren(localStorage.getItem('timeTableChildren'))
    }, []);
   
    return (
        <>
            <div className="time-table-children-chosen-days">
                <button 
                    onClick={() => settimeTableChildren('start')} 
                    className={timeTableChildren === 'start' ? "children-day-chosen" : "children-day-unchosen"}>
                    пн - вт - ср
                </button>

                <button 
                    onClick={() => settimeTableChildren('end')} 
                    className={timeTableChildren === 'end' ? "children-day-chosen" : "children-day-unchosen"}>
                    чт - пт - сб
                </button>
            </div>
            
            <table className="time-table-children" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">Пн</th>
                        <th className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">Вт</th>
                        <th className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">Ср</th>
                        <th className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">Чт</th>
                        <th className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">Пт</th>
                        <th className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">Сб</th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Развивающая гимнастика</h4>
                            <p>2-3 года</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>11.00 - 11.45</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>11.00 - 11.45</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>10.00 - 10.45</p>
                            <p>Зал № 1</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Развивающая гимнастика и ОФП</h4>
                            <p>3-4 года</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 - 18.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 - 19.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 - 18.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 - 19.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 - 18.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>11.00 - 12.00</p>
                            <p>Зал № 1</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика</h4>
                            <p>УТГ -1, 5 – 7 лет</p>
                            <p>(тренер Жанна)</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 20.00</p>
                            <p>Гимнастика </p>
                            <p>Акробатика</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 20.00</p>
                            <p>Гимнастика</p>
                            <p>Акробатика</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика</h4>
                            <p>УТГ – 2, 8 – 11 лет</p>
                            <p>(тренер Жанна)</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>16.00 – 18.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>16.00 – 18.00</p>
                            <p>Гимнастика</p>
                            <p>Акробатика</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>16.00 – 18.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 20.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>16.00 – 18.00</p>
                            <p>Гимнастика</p>
                            <p>Акробатика</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика. Начальная подготовка</h4>
                            <p>5 – 7 лет</p>
                            <p>(тренер Катя)</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 19.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 19.00</p>
                            <p>Зал № 1</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>18.00 – 19.00</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Спортивная аэробика. Начальная подготовка</h4>
                            <p>8 – 11 лет</p>
                            <p>(тренер Оксана)</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>16.00 – 17.30</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>16.00 – 17.30</p>
                            <p>Зал № 2</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Сборная команда</h4>
                            <p>(тренер Виктория)</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 – 21.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 – 21.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableChildren === 'end' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 – 21.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 – 21.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">
                            <p>17.00 – 21.00</p>
                            <p>Зал № 3</p>
                        </td>
                        <td className={timeTableChildren === 'start' ? 'time-table-children-hidden' : ''} align="center">-</td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}