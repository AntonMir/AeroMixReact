import React, {useState} from "react"

// style
import "./priceTableAdults.scss"

export default function PriceTableAdults() {

    // states верхней таблицы
    const [topTablePosition, setTopTablePosition] = useState('onceTreining');

    // states верхней таблицы
    const [botTablePosition, setBotTablePosition] = useState('onceTreining');

   
    return (
        <>
            <div className="price-table-adults-chosen-lessons">
                <button 
                    onClick={() => setTopTablePosition('onceTreining')} 
                    className={topTablePosition === 'onceTreining' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    Разовое занятие
                </button>

                <button 
                    onClick={() => setTopTablePosition('onceAWeek')} 
                    className={topTablePosition === 'onceAWeek' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    1 раз в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('twoTimesAWeek')} 
                    className={topTablePosition === 'twoTimesAWeek' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    2 раза в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('threeTimesAWeek')} 
                    className={topTablePosition === 'threeTimesAWeek' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    3 раза в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('unlimited')} 
                    className={topTablePosition === 'unlimited' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    «Безлимит»*
                </button>
            </div>
            
            <table className="price-table-adults" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">
                            Разовое занятие
                        </th>
                        <th className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            Абонемент на 1 месяц (1 раз в неделю)
                        </th>
                        <th className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            Абонемент на 1 месяц (2 раза в неделю)
                        </th>
                        <th className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            Абонемент на 1 месяц (3 раза в неделю)
                        </th>
                        <th className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">
                            «Безлимит»*
                        </th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Силовая тренировка</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>1600 руб</p>
                        </td>
                        <td className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Стретчинг</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>1600 руб</p>
                        </td>
                        <td className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Пилатес</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>1600 руб</p>
                        </td>
                        <td className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Бачата</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>1600 руб</p>
                        </td>
                        <td className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Тай бо</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>1600 руб</p>
                        </td>
                        <td className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Индивидуальные тренировки</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>2000 руб</p>
                        </td>
                        <td className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} align="center">-</td>
                    </tr>               

                </tbody>
                
            </table> 

            <div className="price-table-adults-chosen-lessons price-table-adults-chosen-lessons-second">
                <button 
                    onClick={() => setBotTablePosition('onceTreining')} 
                    className={botTablePosition === 'onceTreining' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    Разовое занятие
                </button>

                <button 
                    onClick={() => setBotTablePosition('fourTimesAWeek')} 
                    className={botTablePosition === 'fourTimesAWeek' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    4 занятия
                </button>

                <button 
                    onClick={() => setBotTablePosition('eightTimesAWeek')} 
                    className={botTablePosition === 'eightTimesAWeek' ? "adults-lesson-chosen" : "adults-lesson-unchosen"}>
                    8 занятий
                </button>
            </div>

            <table className="price-table-adults price-table-adults-second" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={botTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">
                            Разовое занятие
                        </th>
                        <th className={botTablePosition === 'fourTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            Абонемент на 1 месяц (4 занятия)
                        </th>
                        <th className={botTablePosition === 'eightTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            Абонемент на 1 месяц (8 занятий)
                        </th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Йога</h4>
                        </td>
                        <td className={botTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>650 руб</p>
                        </td>
                        <td className={botTablePosition === 'fourTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>2000 руб</p>
                        </td>
                        <td className={botTablePosition === 'eightTimesAWeek' ? '' : 'price-table-adults-hidden'} align="center">
                            <p>2000 руб</p>
                        </td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}