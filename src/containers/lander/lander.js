import React, { Component } from 'react';
import { connect } from 'react-redux';
/* CSS Styles for Lander */
import styles from './lander.css';
/* Route Components */
import About from '../about/about';
import Skills from '../skills/skills';
import Works from '../works/works';
import Contact from '../contact/contact';
/* Components */
import VideoBackground from '../../components/video_bg'; /* <VideoBackground styling={styles.video} lightingSlider={this.props.lightSlider.lighting} /> */ // NOT IN USE
import TimeSlider from '../../components/time_slider'; /* <TimeSlider sliderStyle={styles.slider} snackbarStyle={styles.snackbar} /> */ // NOT IN USE

export default class Lander extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //lightingSlider: 50
        }

    }

    componentWillMount = () => {
        console.log('ROUTE: ', this.props.navigator.route);
    };

    render() {
        return (
            <div className={styles.lander}>
                {this.props.navigator.route == 'home' || undefined? <div className={styles.landerBackground}></div> : ''}
                {this.socialLinks()}
                {this.routeDisplay()}
            </div>
        );
    }

    /**
     * Provides component to be displayed
     * @returns route component
     */
    routeDisplay = () => {
        console.log('ROUTE: ', this.props.navigator.route);
        switch (this.props.navigator.route) {
            case 'about':
                return (
                    <About />
                );
                break;
            case 'skills':
                return (
                    <Skills />
                );
                break;
            case 'works':
                return (
                    <Works />
                );
                break;
            case 'contact':
                return (
                    <Contact />
                );
                break;
            case 'home':
                return (
                    this.displayTitle()
                );
                break;
            default:
                return (
                    this.displayTitle()
                );
        }
    };

    /**
     * Social links
     * @returns div containing linked images to social websites
     */
    socialLinks = () => {
        return (
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/trevorlinan" target="_blank" ><img src="../../../public/images/in.png" /></a>
                <a href="https://github.com/FilosoferKing" target="_blank" ><img src="../../../public/images/github.png" /></a>
            </div>
        );
    };

    /**
     * Title image
     * @returns image displaying name title
     */
    displayTitle = () => {
        return (
            <div className={styles.titleContainer} >
                <img src="../../../public/images/lander_trevorlinan.png" />
            </div>
        )
    };

}

const mapStateToProps = (state) => {
    return {
        lightSlider: state.lightSlider,
        navigator: state.navigator
    }
};

export default connect(mapStateToProps, null)(Lander);




