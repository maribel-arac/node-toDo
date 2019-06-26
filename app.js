// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');
// console.log(argv);

const toDo = require('./toDo/toDo');

let command = argv._[0];

switch(command){

	case 'create':
		let task = toDo.create ( argv.description );
		console.log(task);
	break;

	case 'list':
		
		let list = toDo.getList();

		for (let task of list) {
			console.log('========To do========'.green);
			console.log(task.description);
			console.log('Status: ', task.completed);
			console.log('===================='.red);
		}


	break;

	case 'update':
		let updated = toDo.update( argv.description, argv.completed );
		console.log(updated);

	break;

	case 'deleteTask':
		let deleted = toDo.deleteTask( argv.description );
		console.log(deleted);

	break;

	default:
	console.log('command not recognized')
}
