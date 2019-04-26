import React from 'react';
import ListItem from './ListItem';

const List = ( { list , onToggleListItem , onEditTask , onDeleteTask } ) => {
    const listItem = list.map((item)=>{
        return (
            <ListItem 
                key={item.id} 
                item={item} 
                onToggleListItem={onToggleListItem}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask} />
        );
    });
    return listItem;
};

export default List;