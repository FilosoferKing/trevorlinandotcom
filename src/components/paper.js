import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* Material UI Components */
import Paper from 'material-ui/Paper';

export default class CirclePaper extends Component {
    constructor (props) {
        super(props);

        this.state = {
            style: {
                width: '',
                backgroundColor: ''
            }

        }
    }

    componentDidMount = () => {
        this.adjustCircleSize();
    };

    render() {
        return (
            <Paper className={this.props.paperStyle} ref="circle" style={this.state.style} zDepth={1} circle={true} >
                {this.text()}
            </Paper>
        );
    }

    /**
     * Display skill text
     * @returns skill name
     */
    text = () => {
        console.log(this.props.paperStyle);
        return (
            <p>{this.props.text}</p>
        );
    };

    /**
     * Create circle by giving paper width same dimension as calculated height
     */
    adjustCircleSize = () => {
        let node = ReactDOM.findDOMNode(this.refs["circle"]);
        if (node){
            let calculatedHeight = node.clientHeight;
            console.log('Calculated Height: ', calculatedHeight);

            this.setState({
                style: {
                    width: calculatedHeight,
                    backgroundColor: this.props.backgroundColor
                }
            })
        }
    };

}


