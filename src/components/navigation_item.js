import React, { Component } from 'react';
/* Material UI Components */
import RaisedButton from 'material-ui/RaisedButton';

export default class NavigationItem extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <RaisedButton label={this.props.text} primary={this.props.boolean} />
        );
    }
}
