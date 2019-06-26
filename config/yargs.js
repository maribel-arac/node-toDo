const description = {
		demand: true,
		alias:'d',
		desc: 'To do description'
	};

const completed = {
		demand: true,
		alias: 'c',
		desc: 'Shows if the taks is completed or pending'
	}; 


const argv = require('yargs')
		.command('create', 'Create a to do item', {
			description
		})
		.command('update', 'Update a completed task', {
			description,
			completed
		})
		.command('deleteTask', 'Delete a task', {
			description
		})
		.help()
		.argv;

module.exports = {
	argv
}