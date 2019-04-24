import React from 'react';

class InputTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showInput: props.item.title.length === 0
        }
    }

    showInput = () => {
        this.setState({showInput:true});
    }

    hideInput = () => {
        this.setState({showInput:false});
    }

    render(){
        if( this.state.showInput ){
            return (<React.Fragment><input type="text" value={ this.props.item.title } 
                onClick={this.showInput} 
                onBlur={this.hideInput}
                onChange={(e)=>this.props.onEditTask(this.props.item.index,e.target.value)} /></React.Fragment>);
        }
        return (<div onClick={this.showInput}>{ this.props.item.title }</div>);
    }
}

class ListItem extends React.Component{
    render(){
        return (
            <li>
                <div className="checkbox checkbox-info checkbox-circle">
                    <input id={`checkbox${this.props.item.index}`} className="styled" type="checkbox" 
                        onChange={()=>this.props.onToggleListItem(this.props.item.index)} 
                        defaultChecked={this.props.item.isCompleted} />
                    <label htmlFor={`checkbox${this.props.item.index}`}></label>
                    <InputTitle 
                        item={this.props.item} 
                        onEditTask={this.props.onEditTask} />
                    <button onClick={ () => this.props.onDeleteTask(this.props.item.index) }> x </button>
                </div>
            </li>
        );
    }
}

export default ListItem;