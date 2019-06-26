const fs= require('fs');

let toDoList = [];

const saveData = () => {

	let data = JSON.stringify(toDoList);

//para crear una lista y guardarla en un archivo TXT
	fs.writeFile('data/data.json', data, (err) => {

		if (err) throw new Error ('Could not be saved', err);
	});
}

const loadDB = () => {
	try {
		toDoList = require('../data/data.json');
	
	} catch (error) {
		toDoList = [];
	}
	
}

const create = (description) => {

	loadDB();


	let toDo = {
		description,
		completed: false
	};

	toDoList.push(toDo);

	saveData();

	return toDo;
}

const getList = () => {
	loadDB();
	return toDoList;
}

const update = (description, completed = true) => {
	
	loadDB();

	let index = toDoList.findIndex(task => task.description === description);

	if ( index >= 0) {
		toDoList[index].completed = completed;
		saveData();
		return true;
	} else {
		return false;
	}

}

const deleteTask = (description) => {
	loadDB();

	let newList = toDoList.filter( task => {
		return task.description !== description
	});

	if (toDoList.length === newList.length){
		return false
	} else {
		toDoList = newList;
		saveData();
		return true;
	}

}


module.exports = {
	create,
	getList,
	update,
	deleteTask
}