Vue.createApp({
	data() { 
		return {
            counter: 0,
            currentid: 0,
            items: [
                {
                    id: '1', 
                    header: 'Понедельник',
                    menu: 'Креветки, вино, чизкейк',
                    image: './crevetki.jpg',
                },
                {
                    id: '2', 
                    header: 'Вторник',
                    menu: 'Паста, шампанское, круассан',
                    image: './pasta.jpg',
                },
                {
                    id: '3', 
                    header: 'Среда',
                    menu: 'Фондю, шампанское, тирамису',                    
                    image: './fondu.jpg',
                },
                {
                    id: '4', 
                    header: 'Четверг',
                    menu: 'Борщ, макароны по-флотски, пирожное-картошка',
                    image: './borsh.jpg',
                },
                {
                    id: '5', 
                    header: 'Пятница',
                    menu: 'Пицца, уха, наполеон',
                    image: './pizza.jpg',
                }
            ],
        }
    },
    methods: { //действия, которые выполняются в приложении

    }
}).mount("#app");
