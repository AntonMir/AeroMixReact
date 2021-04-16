// id - обязательно для указания(должен быть уникальным)
// img - формат строго 400х420
// alt - название фотки сюда
// text - максимальная длинна 110 символов
// href - формат следующий: /treiners/<ИМЯ ТРЕНЕРА> (для красоты отображения в строке браузера)

// img
import zasipkinaOksana from '@img/mainPage/treiners/zasipkinaOksana.jpg'
import zasipkinaJanna from '@img/mainPage/treiners/zasipkinaJanna.jpg'
import levinaAlexandra from '@img/mainPage/treiners/levinaAlexandra.jpg'
import vasilcovaViktoria from '@img/mainPage/treiners/vasilcovaViktoria.jpg'
import bondarenkoLidija from '@img/mainPage/treiners/bondarenkoLidija.jpg'
import bojkovaKristina from '@img/mainPage/treiners/bojkovaKristina.jpg'
import udinIgor from '@img/mainPage/treiners/udinIgor.jpg'

const treiners = [
    {
        id: 1,
        img: zasipkinaOksana,
        alt: 'zasipkinaOksana',
        name: 'Оксана Вячеславовна Засыпкина',
        text: `Тренер по детской спортивной аэробике и по оздоровительной аэробике 
                для взрослых и детей.`,
        href: '/treiners/zasipkinaOksana'
    }, 
    {
        id: 2,
        img: zasipkinaJanna,
        alt: 'zasipkinaJanna',
        name: 'Жанна Вячеславовна Засыпкина',
        text: `Тренер по детской спортивной аэробике и по оздоровительной аэробике 
                для взрослых и детей.`,
        href: '/treiners/zasipkinaJanna'
    }, 
    {
        id: 3,
        img: levinaAlexandra,
        alt: 'levinaAlexandra',
        name: 'Александра Левина',
        text: `Преподаватель джаз-фанка и хип-хопа.`,
        href: '/treiners/levinaAlexandra'
    }, 
    {
        id: 4,
        img: vasilcovaViktoria,
        alt: 'vasilcovaViktoria',
        name: 'Виктория Михайловна Васильцова',
        text: `Тренер-постановщик программ по спортивной аэробике, кандидат 
                в мастера спорта по спортивной аэробике.`,
        href: '/treiners/vasilcovaViktoria'
    }, 
    {
        id: 5,
        img: bondarenkoLidija,
        alt: 'bondarenkoLidija',
        name: 'Лидия Бондаренко',
        text: `Тренер по бачате. Является 11-ти кратной чемпионкой Украины по 
                спортивным бальным танцам.`,
        href: '/treiners/bondarenkoLidija'
    }, 
    {
        id: 6,
        img: bojkovaKristina,
        alt: 'bojkovaKristina',
        name: 'Кристина Бажкова',
        text: `Преподаватель танцевальных фитнес тренировок Zumba fitness.`,
        href: '/treiners/bojkovaKristina'
    }, 
    {
        id: 7,
        img: udinIgor,
        alt: 'udinIgor',
        name: 'Игорь Юдин',
        text: `Тренер по йоге. Занимается йогой с 2009 года, с 2012 г. 
                практикует и преподает йогу Айенгара.`,
        href: '/treiners/udinIgor'
    }, 
    
   
]

export default treiners;