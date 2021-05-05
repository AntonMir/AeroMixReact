// При добавлении новой услуги, создавай новый объект в childrens или adults.

// Каждому новому элементу в массиве добавляй уникальный id

// Максимальная длинна <title> составляет до 25 символов.
// Если вылез за 25 символов, проверяй адаптивку под все форматы, 
// текст может вылезти за блок, и будет выглядеть ущербно

// Максимальная длинна <text> составляет до 225 символов.
// Если вылез за 200 символов, проверяй адаптивку под все форматы, 
// текст может вылезти за блок, и будет выглядеть ущербно

// <mark> подставляедся как уникальный класс для элемента, пример:
// mark: `aerobika` - className=`service service-aerobika`
// mark: `gimnastika` - className=`service service-gimnastika`
// это может понадобиться для кастомизации отдельного элемента, но старйся избегать таких моментов

// При добавлении картинки, обязательно импортируй ее сюда, и укажи в <background>
// img
// children
import aerobika from '@img/mainPage/services/children/aerobika.jpg'
import gimnastika from '@img/mainPage/services/children/gimnastika.jpg'
import ofp from '@img/mainPage/services/children/OFP.jpg'
// import jazfunk from '@img/mainPage/services/children/jazfunk.jpg' // убрали из услуг
import dancehallChildren from '@img/mainPage/services/children/dancehall.jpg'

// adults
import stretching from '@img/mainPage/services/adults/stretching.jpg'
import silovaja from '@img/mainPage/services/adults/silovaja.jpg'
import pilates from '@img/mainPage/services/adults/pilates.jpg'
import joga from '@img/mainPage/services/adults/joga.jpg'
import tennis from '@img/mainPage/services/adults/tennis.jpg'
import bachata from '@img/mainPage/services/adults/bachata.jpg'
import zumba from '@img/mainPage/services/adults/zumba.jpg'
import dancehallAdults from '@img/mainPage/services/adults/dancehall.jpg'
import taeBo from '@img/mainPage/services/adults/taeBo.jpg'


const servicesList = {
        
    children: [
        {
            id: 1,
            title: `Спортивная аэробика`,
            text: `Cложный и эмоциональный вид спорта, в котором спортсмены 
                    выполняют под музыку комплекс упражнений с высокой 
                    интенсивностью и сложно координированными элементами.`,
            background: aerobika,
            href: `/services/children/aerobika#top`,
            mark: `aerobika`,
        },
        {
            id: 2,
            title: `Развивающая гимнастика`,
            text: `Развивающая гимнастика несет исключительно оздоровительную 
                    функцию, направлена на укрепление здоровья детей, доступна 
                    для детей любого телосложения и физической подготовки, 
                    дарит радость и удовольствие от занятий спортом.`,
            background: gimnastika,
            href: `/services/children/gimnastika#top`,
            mark: `gimnastika`,
        },
        {
            id: 3,
            title: `Общефизическая подготовка`,
            text: `ОФП включает несложные, но эффективные упражнения на 
                    развитие координации, баланса, силы, гибкости и 
                    ловкости.`,
            background: ofp,
            href: `/services/children/ofp#top`,
            mark: `ofp`,
        },
        // {
        //     id: 4,
        //     title: `Джаз-фанк (JUZZ FUNK)`,
        //     text: `Cовременный танцевальный стиль, включающий элементы джазовой 
        //             хореографии, хип-хопа, стрип-пластики, эстрадной хореографии 
        //             и вакинга.`,
        //     background: jazfunk,
        //     href: `/services/children/juzzfunk#top`,
        //     mark: `jazfunk`,
        // },
        {
            id: 5,
            title: `Дэнсхолл`,
            text: `Динамичный танец, который показывает свободу и 
                    раскрепощённость любого, кто его исполняет.`,
            background: dancehallChildren,
            href: `/services/all/dancehall#top`,
            mark: `dancehallChildren`,
        },
    ],


    adults: [
        {
            id: 1,
            title: `Стретчинг`,
            text: `Комплекс упражнений на растяжку мышц тела, развитие 
                    гибкости и эластичности связок и суставов.`,
            background: stretching,
            href: `/services/adults/stretching#top`,
            mark: `stretching`,
        },
        {
            id: 2,
            title: `Силовая тренировка`,
            text: `Комплексное занятие, направленное на развитие 
                    различных групп мышц.`,
            background: silovaja,
            href: `/services/adults/silovaja#top`,
            mark: `silovaja`,
        },
        {
            id: 3,
            title: `Пилатес`,
            text: `Система физических упражнений в медленном темпе, 
                    которые задействуют глубоко лежащие мышцы и требуют 
                    значительных усилий.`,
            background: pilates,
            href: `/services/adults/pilates#top`,
            mark: `pilates`,
        },
        {
            id: 4,
            title: `Йога Айенгара`,
            text: `Наш малоподвижный образ жизни не способствует поддержанию 
                    хорошей физической формы, делая тело зажатым и слабым. 
                    Регулярные занятия йогой Айенгара обеспечивают 
                    практикующим улучшение здоровья и внешности.`,
            background: joga,
            href: `/services/adults/joga#top`,
            mark: `joga`,
        },
        {
            id: 5,
            title: `Настольный теннис`,
            text: `Олимпийский вид спорта, спортивная игра с мячом, в которой 
                    используют специальные ракетки и игровой стол, 
                    разграниченный сеткой пополам.`,
            background: tennis,
            href: `/services/adults/tableTennis#top`,
            mark: `tennis`,
        },
        {
            id: 6,
            title: `Бачата`,
            text: `Один из самых простых по хореографии латиноамериканский танец. 
                    Главная особенность стиля — чувственный романтизм, пластика, 
                    гармония и импровизация!`,
            background: bachata,
            href: `/services/adults/bachata#top`,
            mark: `bachata`,
        },
        {
            id: 7,
            title: `Зумба`,
            text: `Зумба - это фитнес-вечеринка, где зажигательные 
                    латиноамериканские ритмы сочетаются с простой хореографией, 
                    что позволяет обеспечить эффективную тренировку всего тела.`,
            background: zumba,
            href: `/services/adults/zumba#top`,
            mark: `zumba`,
        },
        {
            id: 8,
            title: `Дэнсхолл`,
            text: `Динамичный танец, который показывает свободу и 
                    раскрепощённость любого, кто его исполняет.`,
            background: dancehallAdults,
            href: `/services/all/dancehall#top`,
            mark: `dancehallAdults`,
        },
        {
            id: 9,
            title: `Тай бо (tae bo)`,
            text: `Разновидность аэробики, в основе которой лежат боевые 
                    элементы тайского бокса, тхэквондо, бокса, каратэ в 
                    совокупности с базовыми шагами аэробики, собранными в связки.`,
            background: taeBo,
            href: `/services/adults/taebo#top`,
            mark: `taeBo`,
        },
    ]

}

export default servicesList;