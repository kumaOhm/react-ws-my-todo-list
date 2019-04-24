import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    render() {
        const listItems = this.props.list.map((item) => {
            return (
                <ListItem 
                    key={item.index} 
                    item={item} 
                    onToggleListItem={this.props.onToggleListItem}
                    onEditTask={this.props.onEditTask}
                    onDeleteTask={this.props.onDeleteTask} />
            );
        });
        return (
                <ul className="App-ul">{listItems}</ul>
        );
    }
}

export default List;