import React from 'react';
import List from './List';

class CompletedSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : props.list.length > 0
        };
        console.log( 'constructor:' );
    }

    toggleList = () => {
        this.setState({show:!this.state.show});
    }

    render(){
        return (
            <React.Fragment>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <h6>{ this.props.list.length } Completed</h6>
                    <button className="btn btn-info btn-sm" onClick={this.toggleList}>{ ( this.state.show ) ? 'hide' :'show'}</button>
                </div>
                
                { this.state.show && <List 
                    list={this.props.list}
                    onToggleListItem={this.props.onToggleListItem} 
                    onEditTask={this.props.onEditTask}
                    onDeleteTask={this.props.onDeleteTask} /> }
            </React.Fragment>
        );
    }
}

export default CompletedSection;