import React, {useState} from "react"

// style
import "./priceTableChildren.scss"

export default function PriceTableChildren() {

    const [topTablePosition, setTopTablePosition] = useState('onceTreining');
   
    return (
        <>
            <div className="price-table-children-chosen-lessons">
                <button 
                    onClick={() => setTopTablePosition('onceTreining')} 
                    className={topTablePosition === 'onceTreining' ? "children-lesson-chosen" : "children-lesson-unchosen"}>
                    Разовое занятие
                </button>

                <button 
                    onClick={() => setTopTablePosition('TwoTimesAWeek')} 
                    className={topTablePosition === 'TwoTimesAWeek' ? "children-lesson-chosen" : "children-lesson-unchosen"}>
                    2 раза в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('ThreeTimesAWeek')} 
                    className={topTablePosition === 'ThreeTimesAWeek' ? "children-lesson-chosen" : "children-lesson-unchosen"}>
                    3 раза в неделю
                </button>

                <button 
                    onClick={() => setTopTablePosition('fourAndFiveTimesAWeek')} 
                    className={topTablePosition === 'fourAndFiveTimesAWeek' ? "children-lesson-chosen" : "children-lesson-unchosen"}>
                    4-5 раз в неделю
                </button>
            </div>
            
            <table className="price-table-children" cellSpacing="0">
                <tbody>
                    <tr>
                        <th align="start">Направление</th>
                        <th className={topTablePosition === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            Разовое занятие
                        </th>
                        <th className={topTablePosition === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            Абонемент на 1 месяц (2 раза в неделю)
                        </th>
                        <th className={topTablePosition === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            Абонемент на 1 месяц (3 раза в неделю)
                        </th>
                        <th className={topTablePosition === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            Абонемент на 1 месяц (4-5 раза в неделю)
                        </th>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Все направления</h4>
                            <p>(кроме: Джаз-Фанк, Индивидуальная тренировка)</p>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            <p>650 руб</p>
                        </td>
                        <td className={topTablePosition === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                        <td className={topTablePosition === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            <p>5500 руб</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="start">
                            <h4>Джаз-Фанк</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            <p>650 руб</p>
                        </td>
                        <td className={topTablePosition === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={topTablePosition === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                    </tr>
                    <tr>
                        <td align="start">
                            <h4>Индивидуальная тренировка</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            <p>1500 руб</p>
                        </td>
                        <td className={topTablePosition === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                    </tr>

                </tbody>
                
            </table> 

        </>
    )
}