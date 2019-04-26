import React from 'react';

const ListItem = ({ item, onToggleListItem, onDeleteTask, onEditTask }) => {
    return (
        <div key={item.id}>
            <div>
                <input type="checkbox" onChange={()=>onToggleListItem(item.id)} defaultChecked={item.isCompleted} />
                <input 
                    value={item.title}
                    onChange={(e)=>onEditTask(item.id,e.target.value)}
                />
            </div>
            <button onClick={() => onDeleteTask(item.id)}>remove</button>
        </div>
    );
};

export default ListItem;