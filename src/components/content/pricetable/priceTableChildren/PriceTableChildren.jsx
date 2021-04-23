import React, {useState} from "react"

// style
import "./priceTableChildren.scss"

export default function PriceTableChildren() {

    const [topTablePosition, setTopTablePosition] = useState('firstThree');
   
    return (
        <>
            <div className="price-table-children-chosen-lessons">
                <button 
                    onClick={() => setTopTablePosition('firstThree')} 
                    className={topTablePosition === 'firstThree' ? "children-lesson-chosen" : "children-lesson-unchosen"}>
                    <p>1) Разовое занятие</p><p>2) 2 раза в неделю</p><p>3) 3 раза в неделю</p>
                </button>

                <button 
                    onClick={() => setTopTablePosition('thecondThree')} 
                    className={topTablePosition === 'thecondThree' ? "children-lesson-chosen" : "children-lesson-unchosen"}>
                     <p>4) 4-5 раз в неделю</p><p>5) Персональная тренеровка</p><p>6) Сборная команда</p>
                </button>
            </div>
            
            <table className="price-table-children" cellSpacing="0">
                <tbody>
                    <tr>
                        {/* <th align="start">Направление</th> */}
                        <th className={topTablePosition === 'firstThree' ? '' : 'price-table-children-hidden'} align="center">
                            Разовое занятие
                        </th>
                        <th className={topTablePosition === 'firstThree' ? '' : 'price-table-children-hidden'} align="center">
                            Абонемент на 8 занятий (2 раза в неделю)
                        </th>
                        <th className={topTablePosition === 'firstThree' ? '' : 'price-table-children-hidden'} align="center">
                            Абонемент на 12 занятий (3 раза в неделю)
                        </th>
                        <th className={topTablePosition === 'thecondThree' ? '' : 'price-table-children-hidden'} align="center">
                            Абонемент на 20 занятий (4 -5 занятий в неделю)
                        </th>
                        <th className={topTablePosition === 'thecondThree' ? '' : 'price-table-children-hidden'} align="center">
                            Персональная тренеровка
                        </th>
                        <th className={topTablePosition === 'thecondThree' ? '' : 'price-table-children-hidden'} align="center">
                            Сборная команда
                        </th>
                    </tr>

                    <tr>
                        {/* <td align="start">
                            <h4>Все направления</h4>
                            <p>(кроме: Джаз-Фанк, Индивидуальная тренировка)</p>
                        </td> */}
                        <td className={topTablePosition === 'firstThree' ? '' : 'price-table-children-hidden'} align="center">
                            <p>650 руб</p>
                        </td>
                        <td className={topTablePosition === 'firstThree' ? '' : 'price-table-children-hidden'} align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className={topTablePosition === 'firstThree' ? '' : 'price-table-children-hidden'} align="center">
                            <p>5000 руб</p>
                        </td>
                        <td className={topTablePosition === 'thecondThree' ? '' : 'price-table-children-hidden'} align="center">
                            <p>5500 руб</p>
                        </td>
                        <td className={topTablePosition === 'thecondThree' ? '' : 'price-table-children-hidden'} align="center">
                            <p>1500 руб</p>
                        </td>
                        <td className={topTablePosition === 'thecondThree' ? '' : 'price-table-children-hidden'} align="center">
                            <p>6000 руб</p>
                        </td>
                    </tr>

                    {/* <tr>
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
                    </tr> */}

                    {/* <tr>
                        <td align="start">
                            <h4>Индивидуальная тренировка</h4>
                        </td>
                        <td className={topTablePosition === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            <p>1500 руб</p>
                        </td>
                        <td className={topTablePosition === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={topTablePosition === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                    </tr> */}

                </tbody>
                
            </table> 

        </>
    )
}