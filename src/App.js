import React, { Component } from 'react';
import Header from './components/Header';
import CompletedSection from './components/CompletedSection';
import List from './components/List';

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			numOfCompleted: 0,
			list: [{
				title: 'Task 1',
				isCompleted: false
			}, {
				title: 'Task 2',
				isCompleted: false
			}, {
				title: 'Task 3',
				isCompleted: false
			}, {
				title: 'Task 4',
				isCompleted: false
			}]
		};
	}

	onToggleListItem = (index) => {
		console.log('onToggleListItem:', index);
		const list = this.state.list;
		list[index].isCompleted = !list[index].isCompleted;
		this.setState({ list: list });
	}

	onToggleCompletedItem = () => {
		console.log('onToggleCompletedItem:');
	}

	onCreateNewItem = () => {
		this.setState({
			list: [...this.state.list, {
				title: `Task ${this.state.list.length + 1}`,
				isCompleted: false
			}]
		})
	}

	onEditTask = (index,value) => {
		const list = this.state.list; 
		list[index].title = value;
		this.setState({ list: list });
	}

	onDeleteTask = (index) => {
		const list = this.state.list.filter( (item,i) => {
			return  ( i !== index ) ? item : null ;
		});
		this.setState({ list: list });
	}

	render() {
		const list = this.state.list.map( (item,index) => {
			item.index = index;
			return item;
		});
		return (
			<div className="app container">
				<div className="row justify-content-md-center">
					<div className="col-6">
						<Header title="To Do List" 
							onCreateNewItem={this.onCreateNewItem} />
						<CompletedSection
							list={list.filter((item) => item.isCompleted)} 
							onToggleListItem={this.onToggleListItem}
							onEditTask={this.onEditTask}
							onDeleteTask={this.onDeleteTask} />
						<List 
							list={list.filter((item) => !item.isCompleted)} 
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
