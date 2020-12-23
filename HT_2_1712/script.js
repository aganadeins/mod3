Vue.createApp({
	data() { 
		return {
            items: [
                {
                    id: '1', 
                    problem: 'У семи лиц по семи кошек; каждая кошка съедает по семи мышей, каждая мышь съедает по семи колосьев, из каждого колоса может вырасти по семь мер ячменя. Как велики числа этого ряда и их сумма?',
                    solution: 'Здесь имеется пять членов <i>геометрической</i> прогрессии со знаменателем 7: 7, 49, 343, 4201, 16807. Теперь подсчитаем сумму:<br> S = 7*2801 = 19607',
                    visible: false 
                },
                {
                    id: '2', 
                    problem: 'Определить длину сторон прямоугольника, если известно их отношение и площадь фигуры.',
                    solution: 'Обозначив через x и y искомые длины сторон, сводим задачу к системе уравнений:<br><img src="https://latex.codecogs.com/gif.latex?\frac{x}{y}=\frac{m}{n};&space;xy=S" title="\frac{x}{y}=\frac{m}{n}; xy=S" /><br>                    Перемножив эти уравнения, получим <br> <img src="https://latex.codecogs.com/gif.latex?x=\sqrt[]{\frac{m}{n}\cdot&space;S}" title="x=\sqrt[]{\frac{m}{n}\cdot S}" /><br><img src="https://latex.codecogs.com/gif.latex?y=\frac{n}{m}\cdot&space;\sqrt[]{\frac{m}{n}\cdot&space;S}" title="y=\frac{n}{m}\cdot \sqrt[]{\frac{m}{n}\cdot S}" />',
                    visible: false 
                },
                {
                    id: '3', 
                    problem: 'При вычислении площади равнобедренного треугольника египтяне брали половину произведения основания на боковую сторону. Вычислить в процентах, как велика ошибка, если основание равнобедренного треугольника равно 4, а боковая сторона - 10.',
                    solution: 'Не более 2% ',
                    visible: false 
                },
                {
                    id: '4', 
                    problem: 'Определить объём квадратной усечённой пирамиды, если её высота равна 6, сторона нижнего основания 4, верхнего 2.',
                    solution: 'Египтяне решали эту задачу по формуле<br><img src="https://latex.codecogs.com/gif.latex?V&space;=&space;\frac{h}{3}&space;(a^{2}&plus;ab&plus;b^{2})" title="V = \frac{h}{3} (a^{2}+ab+b^{2})" /> ',
                    visible: false
                },
            ],
        }
    },
    methods: { //действия, которые выполняются в приложении

    }
}).mount("#app");
