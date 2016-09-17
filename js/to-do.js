new Vue({
	el:'#app',
	data:{
		name:'To Do Application',
		todos: [{id:1,title:'first'}],
		newToDo: {id:null,title:''}
	},
	methods:{
		addToDo(newToDo){
			newToDo.id = this.todos.length + 1;
			this.todos.push(newToDo)
			this.newToDo = {id:null,title:''}
		},
		deleteToDo(deleteToDo){
			this.todos.$remove(deleteToDo)
		}
	}
})