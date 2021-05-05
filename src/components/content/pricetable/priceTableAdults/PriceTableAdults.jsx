import React, {useState} from "react"

// style
import "./priceTableAdults.scss"

export default function PriceTableAdults() {

    // states верхней таблицы
    const [topTablePosition, setTopTablePosition] = useState('onceTreining');
   
    return (
        <>
            <div className="price-table-adults-chosen-lessons">
                <button 
                    onClick={() => setTopTablePosition('onceTreining')} 
                    className={topTablePosition === 'onceTreining' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    Разовое занятие
                </button>

                <button 
                    onClick={() => setTopTablePosition('onceAWeek')} 
                    className={topTablePosition === 'onceAWeek' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    1 раз в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('twoTimesAWeek')} 
                    className={topTablePosition === 'twoTimesAWeek' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    2 раза в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('threeTimesAWeek')} 
                    className={topTablePosition === 'threeTimesAWeek' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    3 раза в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('unlimited')} 
                    className={topTablePosition === 'unlimited' 
                                ? "adults-lesson-chosen" 
                                : "adults-lesson-unchosen"}>
                    «Безлимит»
                </button>
            </div>
            
            <table className="price-table-adults" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Оздоровительная аэробика</th>
                        <th 
                            className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Разовое занятие
                        </th>
                        <th 
                            className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент на 4 занятия (1 раз в неделю)
                        </th>
                        <th 
                            className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент на 8 занятий (2 раза в неделю)
                        </th>
                        <th 
                            className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент на 12 занятий (3 раза в неделю)
                        </th>
                        <th 
                            className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            Абонемент «Безлимит» (неограниченное количество занятий в месяц)
                        </th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Силовая тренировка</h4>
                        </td>
                        <td 
                            rowspan="8" 
                            className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>650 руб</p>
                        </td>
                        <td 
                            rowspan="8" 
                            className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>1600 руб</p>
                        </td>
                        <td 
                            rowspan="8" 
                            className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>3000 руб</p>
                        </td>
                        <td 
                            rowspan="8" 
                            className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>4000 руб</p>
                        </td>
                        <td 
                            rowspan="8" 
                            className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>5000 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Пилатес</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Стретчинг</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Зумба</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Бачата</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Дэнсхолл</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Тай бо</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Lady Dance</h4>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Персональная тренировка</h4>
                        </td>
                        <td 
                            className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>2000 руб</p>
                        </td>
                        <td 
                            className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                        <td 
                            className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                        <td 
                            className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                        <td 
                            className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                    </tr>               
                
                    <tr>
                        <td align="start">
                            <h4>Йога</h4>
                        </td>
                        <td 
                            className={topTablePosition === 'onceTreining' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>650 руб</p>
                        </td>
                        <td 
                            className={topTablePosition === 'onceAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>2000 руб</p>
                        </td>
                        <td 
                            className={topTablePosition === 'twoTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">
                            <p>3600 руб</p>
                        </td>
                        <td 
                            className={topTablePosition === 'threeTimesAWeek' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                        <td 
                            className={topTablePosition === 'unlimited' ? '' : 'price-table-adults-hidden'} 
                            align="center">-</td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}