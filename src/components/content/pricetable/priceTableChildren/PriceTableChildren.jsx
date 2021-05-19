import React from "react"

// style
import "./priceTableChildren.scss"

export default function PriceTableChildren() {
    // тут 2 таблицы, если надо подредактировать инфу, то меняй ее в 2-х местах
   
    return (
        <>            
            <table className="price-table-children" cellSpacing="0">
                <tbody>
                    <tr>
                        {/* <th align="start">Направление</th> */}
                        <th className='firstThree'align="center">
                            Разовое занятие
                        </th>
                        <th className='firstThree'align="center">
                            Абонемент на 8 занятий (2 раза в неделю)
                        </th>
                        <th className='firstThree'align="center">
                            Абонемент на 12 занятий (3 раза в неделю)
                        </th>
                        <th className='thecondThree'align="center">
                            Абонемент на 20 занятий (4 - 5 занятий в неделю)
                        </th>
                        <th className='thecondThree'align="center">
                            Персональная тренировка
                        </th>
                        <th className='thecondThree'align="center">
                            Сборная команда
                        </th>
                    </tr>

                    <tr>
                        {/* <td align="start">
                            <h4>Все направления</h4>
                            <p>(кроме: Джаз-Фанк, Индивидуальная тренировка)</p>
                        </td> */}
                        <td className='firstThree'align="center">
                            <p>650 руб</p>
                        </td>
                        <td className='firstThree'align="center">
                            <p>4000 руб</p>
                        </td>
                        <td className='firstThree'align="center">
                            <p>5000 руб</p>
                        </td>
                        <td className='thecondThree'align="center">
                            <p>5500 руб</p>
                        </td>
                        <td className='thecondThree'align="center">
                            <p>1500 руб</p>
                        </td>
                        <td className='thecondThree'align="center">
                            <p>6000 руб</p>
                        </td>
                    </tr>

                    {/* <tr>
                        <td align="start">
                            <h4>Джаз-Фанк</h4>
                        </td>
                        <td className={priceTableChildren === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            <p>650 руб</p>
                        </td>
                        <td className={priceTableChildren === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">
                            <p>3000 руб</p>
                        </td>
                        <td className={priceTableChildren === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={priceTableChildren === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                    </tr> */}

                    {/* <tr>
                        <td align="start">
                            <h4>Индивидуальная тренировка</h4>
                        </td>
                        <td className={priceTableChildren === 'onceTreining' ? '' : 'price-table-children-hidden'} align="center">
                            <p>1500 руб</p>
                        </td>
                        <td className={priceTableChildren === 'TwoTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={priceTableChildren === 'ThreeTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                        <td className={priceTableChildren === 'fourAndFiveTimesAWeek' ? '' : 'price-table-children-hidden'} align="center">-</td>
                    </tr> */}

                </tbody>

            </table> 

                
            <table className="price-table-children price-table-children-second" cellSpacing="0">

                <tbody className="thecond-table">
                    <tr>
                        <th className='thirdThree'align="center">
                            Абонемент на 20 занятий (4 - 5 занятий в неделю)
                        </th>
                        <th className='thirdThree'align="center">
                            Персональная тренировка
                        </th>
                        <th className='thirdThree'align="center">
                            Сборная команда
                        </th>
                    </tr>

                    <tr>
                        <td className='thirdThree'align="center">
                            <p>5500 руб</p>
                        </td>
                        <td className='thirdThree'align="center">
                            <p>1500 руб</p>
                        </td>
                        <td className='thirdThree'align="center">
                            <p>6000 руб</p>
                        </td>
                    </tr>

                </tbody>

            </table> 

        </>
    )
}