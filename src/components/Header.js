import React from 'react';

class Header extends React.Component{

    addList(){
        console.log( 'addList:' );
    }

    render(){
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }} className="mt-3">
                <h4>{this.props.title}</h4>
                <button type="button" className="btn btn-outline-secondary" onClick={this.props.onCreateNewItem}>+</button>
            </div>
        );
    }
}

export default Header;