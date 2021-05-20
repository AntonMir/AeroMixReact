// Если надо добавить новый слайд, просто добавь элемент к массиву,
// там все аваптивно подстроится

// ширина картинки должна быть 190px на 120px

// максимальная длинна text = 185 символов

// максимальная длинна title = 45-50 символов

// tag - то, что написано в желтом флажке на слайде

// img
import newsEl1 from '@img/mainPage/news/news1.svg'
import newsEl2 from '@img/mainPage/news/news2.jpg'



const news = [
    {
        id: 1,
        img: newsEl1,
        tag: 'Новость дня',
        title: 'Мы возобновляем свою работу с 1 июля',
        text:  `Дорогие друзья, мы по вам очень скучали и ждем вновь на занятия. 
                В клубе приняты меры безопасности, рекомендованные 
                Роспотребнадзором, выполнены требования по гигиене 
                и дистанцированию!`,
    }, 
    {
        id: 2,
        img: newsEl2,
        tag: 'Соревнования',
        title: 'Соревнования в г. Суздале оказались напряженными',
        text:  `В рамках мероприятия проводилось 3 разных соревнования. 
                Наши спортсмены показали себя достойно и завоевали 
                серебряную медаль в номинации «смешанные пары».`,
    },
   
]

export default news;