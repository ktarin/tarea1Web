var app = new Vue({ 
    el: '#app',
    data: {
        saludo: 'Estoy usando Vue'
    }
});

var vforexample = new Vue({
	el: '#list',
	data: {
		items: [
			{message: 'Lorem'},
			{message: 'Ipsum'},
			{message: 'Dolor'}
		]
	}
})

var ejboton = new Vue({
	el: '#boton',
  	data: {
    	counter: 0
  	}
})
