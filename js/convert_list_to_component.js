Vue.component('my-tasks',{
	template: '#task-template',
	props: ['lists']
})
new Vue({
	el: '#app',
	data: {
		tasks: [
			{body: 'first', completed: false},
			{body: 'second', completed: true},
			{body: 'third', completed: false},
		]
	}
})