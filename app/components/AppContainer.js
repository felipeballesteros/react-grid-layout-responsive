import React from 'react';
import Nav from './global/Nav';

export default React.createClass({

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    },

    render() {
        return (
            <div>
                <h1>AppContainer</h1>
                <Nav />
                {this.props.children}
            </div>
        );
    }
});