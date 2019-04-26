import React from 'react';

class Header extends React.Component{
    render(){
        const { title , onCreateNewItem } = this.props;
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }} className="mt-3">
                <h4>{title}</h4>
                <button type="button" className="btn btn-outline-secondary" onClick={onCreateNewItem}>+</button>
            </div>
        );
    }
}

export default Header;