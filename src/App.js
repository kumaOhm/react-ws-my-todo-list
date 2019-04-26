import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';

import _ from 'lodash';

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [{
				id: 1,
				title: 'Task 1',
				isCompleted: true
			}, {
				id: 2,
				title: 'Task 2',
				isCompleted: false
			}, {
				id: 3,
				title: 'Task 3',
				isCompleted: false
			}, {
				id: 4,
				title: 'Task 4',
				isCompleted: true
			}],
			showCompleted: true,
			lastId: 5,
		};
	}

	onToggleListItem = (itemId) => {
		this.setState(({ list }) => {
			const newList = _.cloneDeep(list);
			const selectedItem = newList.find((item) => item.id === itemId);
			// console.log( selectedItem , itemId );
			selectedItem.isCompleted = !selectedItem.isCompleted;
			return { list: newList };
		});
	}

	onToggleCompletedItem = () => {
		this.setState(({ showCompleted }) => ({ showCompleted: !showCompleted }));
	}

	onCreateNewItem = () => {
		this.setState(({ list, lastId }) => ({
			list: [...list, { id: lastId, title: `Task ${lastId}`, isCompleted: false }],
			lastId: lastId + 1,
		}));
	}

	onEditTask = (itemId, value) => {
		this.setState(({ list }) => {
			const newList = _.cloneDeep(list);
			const selectedItem = newList.find((item) => item.id === itemId);
			selectedItem.title = value;
			return { list: newList};
		});
	}

	onDeleteTask = (itemId) => {
		this.setState(({ list }) => {
			const newList = list.filter((item) => item.id !== itemId);
			return {
				list: newList
			}
		});
	}

	render() {
		const { list, showCompleted } = this.state;
		const completedList = list.filter((item) => item.isCompleted);
		const unCompletedList = list.filter((item) => !item.isCompleted);
		const completedItemNum = completedList.length;
		return (
			<div className="app container">
				<div className="row justify-content-md-center">
					<div className="col-6">
						<Header title="To Do List"
							onCreateNewItem={this.onCreateNewItem} />
						<div style={{display:'flex',justifyContent:'space-around'}}>
							<div>{completedItemNum} Completed</div>
							<div
								style={{ color: 'blur', cursor: 'pointer' }}
								onClick={this.onToggleCompletedItem}
							>
								{showCompleted ? 'Hide' : 'Show'}
							</div>
						</div>
						{
							showCompleted &&
							<List
								list={completedList}
								onToggleListItem={this.onToggleListItem}
								onEditTask={this.onEditTask}
								onDeleteTask={this.onDeleteTask} />
						}
						<List
							list={unCompletedList}
							onToggleListItem={this.onToggleListItem}
							onEditTask={this.onEditTask}
							onDeleteTask={this.onDeleteTask} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
