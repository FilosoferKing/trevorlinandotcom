import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/* Redux Actions */
import { slideLight } from '../actions/index';
/* Material UI Components */
import Slider from 'material-ui/Slider';
import Snackbar from 'material-ui/Snackbar';
/* Tooling */
import moment from 'moment';

class TimeSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lightingSlider: 50,
            open: true,
            greeting: null
        };
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
            greeting: null
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    componentDidMount = () => {
        this.currentTime();
    };

    render() {
        return (
            <div className={this.props.sliderStyle}>
                {/*console.log('LIGHTING INSIDE SLIDER: ', this.props.lightSlider.lighting)*/}
                <Snackbar
                    className={this.props.snackbarStyle}
                    style={localStyles.snackbar}
                    open={this.state.open}
                    message={this.state.greeting?this.state.greeting:"Brightness set to " + this.props.lightSlider.lighting}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                    />
                <Slider
                    style={localStyles.slider}
                    axis="y"
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={this.state.lightingSlider}
                    value={this.props.lightSlider.lighting}
                    onChange={this.lighting}
                    />
            </div>
        );
    }

    /**
     * Provide brightness level to slideLight() Redux action
     * @param event
     * @param value
     */
    lighting = (event, value) => {
        let shadow = (value>90)?5:0;
        this.props.slideLight(value);
        this.handleTouchTap();
    };

    /**
     * Set background brightness dependent on the time of day
     */
    currentTime = () => {
        let hour = moment().format("H");
        //console.log('Current Time: ', hour + ' What the heck!');

        let currentDate = Number(hour);
        //console.log('Current Date: ', currentDate);

        this.props.slideLight(100);

        //if(currentDate>=0 && currentDate<7) {
        //    this.setState({
        //        lightingSlider: 15,
        //        greeting: "Night owl; or early riser?"
        //    });
        //    this.props.slideLight(15);
        //} else if (currentDate>=7 && currentDate<9) {
        //    this.setState({
        //        lightingSlider: 50,
        //        greeting: "Good morning!"
        //    });
        //    this.props.slideLight(50);
        //} else if (currentDate>=10 && currentDate<12) {
        //    this.setState({
        //        lightingSlider: 50,
        //        greeting: "Good morning!"
        //    });
        //    this.props.slideLight(50);
        //}else if (currentDate>=12 && currentDate<15) {
        //    this.setState({
        //        lightingSlider: 50,
        //        greeting: "Good afternoon!"
        //    });
        //    this.props.slideLight(50);
        //} else if (currentDate>=15 && currentDate<18) {
        //    this.setState({
        //        lightingSlider: 50,
        //        greeting: "Good afternoon!"
        //    });
        //    this.props.slideLight(50);
        //} else if (currentDate>=18 && currentDate<=24) {
        //    this.setState({
        //        lightingSlider: 40,
        //        greeting: "Good evening."
        //    });
        //    this.props.slideLight(40);
        //} else if (currentDate>=4 && currentDate<=8) {
        //    this.setState({
        //        lightingSlider: 25
        //    });
        //    this.props.slideLight(25);
        //}

    }

}

const localStyles = {
    slider: {
        'height': '100px'
    },
    snackbar: {
        'textColor': '#E7BD3B'
    }
};

const mapStateToProps = (state) => {
    return {
        lightSlider: state.lightSlider
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        slideLight: slideLight
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlider);