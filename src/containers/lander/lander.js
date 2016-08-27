import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation/navigation';
import styles from './lander.css';
import VideoBackground from '../../components/video_bg';
import TimeSlider from '../../components/time_slider';
import About from '../about/about';
import Skills from '../skills/skills';
import Works from '../works/works';
import Contact from '../contact/contact';

export default class Lander extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lightingSlider: 50,
            titleShadow: '100',
            aboutTitleImage: null,
            selfImage: null,
            skillsTitleImage: null,
            contactThankYouImage: null
        }

    }

    componentWillMount = () => {
        console.log('ROUTE: ', this.props.navigator.route);
        this.setState({
            aboutTitleImage: () => {
                return (
                    <img src="../../../public/images/about_hiimtrevor.png" />
                );
            },
            selfImage: () => {
                return (
                    <img src="../../../public/images/about_trevor_alt.jpg" />
                );
            },
            skillsTitleImage: () => {
                return (
                    <img src="../../../public/images/skills_skillstitle.png" />
                );
            },
            contactThankYouImage: () => {
                return (
                    <img src="../../../public/images/contact_thankyou.png" />
                );
            }
        })
    }

    /* NOT IN USE
        <TimeSlider sliderStyle={styles.slider} snackbarStyle={styles.snackbar} />
        <VideoBackground styling={styles.video} lightingSlider={this.props.lightSlider.lighting} />
    */
    render() {
        return (
            <div className={styles.lander}>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/trevorlinan" target="_blank" ><img src="../../../public/images/in.png" /></a>
                    <a href="https://github.com/FilosoferKing" target="_blank" ><img src="../../../public/images/github.png" /></a>
                </div>
                {this.props.navigator.route == 'home' || undefined? <div className={styles.landerBackground}></div> : ''}
                {this.routeDisplay()}
            </div>
        );
    }

    routeDisplay = () => {
        console.log('ROUTE: ', this.props.navigator.route);
        switch (this.props.navigator.route) {
            case 'about':
                return (
                    <About titleImage={this.state.aboutTitleImage()} selfImage={this.state.selfImage()} />
                );
                break;
            case 'skills':
                return (
                    <Skills titleImage={this.state.skillsTitleImage()} />
                );
                break;
            case 'works':
                return (
                    <Works />
                );
                break;
            case 'contact':
                return (
                    <Contact thankYouImage={this.state.contactThankYouImage()} />
                );
                break;
            case 'home':
                return (
                    <div className={styles.titleContainer} style={{'WebkitFilter':'drop-shadow(' + this.state.titleShadow + 'px ' + this.state.titleShadow + 'px ' + this.state.titleShadow + 'px ' + '#000000)'}}>
                        <img src="../../../public/images/lander_trevorlinan.png" />
                    </div>
                );
                break;
            default:
                return (
                    <div className={styles.titleContainer} style={{'WebkitFilter':'drop-shadow(' + this.state.titleShadow + 'px ' + this.state.titleShadow + 'px ' + this.state.titleShadow + 'px ' + '#000000)'}}>
                        <img src="../../../public/images/lander_trevorlinan.png" />
                    </div>
                );
        }
    }





}

const mapStateToProps = (state) => {
    return {
        lightSlider: state.lightSlider,
        navigator: state.navigator
    }
};

export default connect(mapStateToProps, null)(Lander);




