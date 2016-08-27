import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './works.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'underscore';


export default class Works extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title: null
        }

    }

    render() {
        return (
            <div className={styles.worksContainer}>
                <div className={styles.worksTitle}></div>
                <div className={styles.gridLayer1}>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image1')}
                        data-title={worksInfo.scienceme.title}
                        data-desc={worksInfo.scienceme.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.scienceme.title}
                            href={worksInfo.scienceme.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                    title: null
                               }).bind(this);
                            }}
                            />
                            <img
                                src="../../../public/images/works_scienceme.jpg"
                                className={styles.gridImage} />
                    </div>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image2')}
                        data-title={worksInfo.thetriggerguy.title}
                        data-desc={worksInfo.thetriggerguy.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.thetriggerguy.title}
                            href={worksInfo.thetriggerguy.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                    title: null
                               }).bind(this);
                            }}
                            />
                            <img
                                src="../../../public/images/works_triggerguy.jpg"
                                className={styles.gridImage} />
                    </div>
                </div>
                <div className={styles.gridLayer2}>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image3')}
                        data-title={worksInfo.ingenconcepts.title}
                        data-desc={worksInfo.ingenconcepts.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.ingenconcepts.title}
                            href={worksInfo.ingenconcepts.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                    title: null
                               }).bind(this);
                            }}
                            />
                        <img
                            src="../../../public/images/works_ingenconcepts.jpg"
                            className={styles.gridImageWide} />
                    </div>
                </div>
                <div className={styles.gridLayer3}>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image4')}
                        data-title={worksInfo.chargersignup.title}
                        data-desc={worksInfo.chargersignup.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.chargersignup.title}
                            href={worksInfo.chargersignup.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                     title: null
                               }).bind(this);
                            }}
                            />
                        <img
                            src="../../../public/images/works_chargersignup.jpg"
                            className={styles.gridImage} />
                    </div>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image5')}
                        data-title={worksInfo.tictactoe.title}
                        data-desc={worksInfo.tictactoe.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.tictactoe.title}
                            href={worksInfo.tictactoe.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                    title: null
                               }).bind(this);
                            }}
                            />
                        <img
                            src="../../../public/images/works_tictactoe.jpg"
                            className={styles.gridImage} />
                    </div>
                </div>
                <div className={styles.gridLayer4}>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image6')}
                        data-title={worksInfo.matchwars.title}
                        data-desc={worksInfo.matchwars.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.matchwars.title}
                            href={worksInfo.matchwars.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                    title: null
                               }).bind(this);
                            }}
                            />
                        <img
                            src="../../../public/images/works_matchwars.jpg"
                            className={styles.gridImageWide} />
                    </div>
                </div>
                <div className={styles.gridLayer5}>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image7')}
                        data-title={worksInfo.twailerz.title}
                        data-desc={worksInfo.twailerz.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.twailerz.title}
                            href={worksInfo.twailerz.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                    title: null
                               }).bind(this);
                            }}
                            />
                        <img
                            src="../../../public/images/works_twailerz.jpg"
                            className={styles.gridImage} />
                    </div>
                    <div
                        className={styles.gridTile}
                        onClick={this.testClick.bind(null, 'image8')}
                        data-title={worksInfo.marounrecords.title}
                        data-desc={worksInfo.marounrecords.desc}
                        >
                        <RaisedButton
                            className={styles.gridTileButton}
                            style={localStyles.button}
                            backgroundColor={'#ffffff'}
                            rippleStyle={localStyles.ripple}
                            labelColor={"#ffffff"}
                            labelStyle={localStyles.button}
                            label={this.state.title?this.state.title:worksInfo.marounrecords.title}
                            href={worksInfo.marounrecords.link}
                            target="_blank"
                            onMouseEnter={() => {
                               this.setState({
                                    title: 'Show Me'
                               }).bind(this);
                            }}
                            onMouseLeave={() => {
                               this.setState({
                                     title: null
                               }).bind(this);
                            }}
                            />
                        <img
                            src="../../../public/images/works_marounrecords.jpg"
                            className={styles.gridImage} />
                    </div>
                </div>
            </div>
        );
    }

    testClick = (image) => {
        console.log(image);
    }

}

const localStyles = {
    button: {
        'color': '#271E12',
        'fontSize': '1.5vh',
        'fontWeight': '300',
        'backgroundColor': 'transparent'
    },
    ripple: {
        'backgroundColor': '#000000',
        'color': '#000000'
    }

}

const worksInfo = {
    scienceme: {
        title: 'Science Me!',
        desc: 'Science Me! is a one page website that will take you to a random science based website each time you click. The concept behind this website is to explore new areas of science and enrich your knowledge while never knowing what to expect!',
        link: 'http://www.ingenconcepts.com/scienceme'
    },
    thetriggerguy: {
        title: 'The Trigger Guy',
        desc: 'Description of The Trigger Guy. Click to visit the site!',
        link: 'http://www.thetriggerguyusa.com'
    },
    ingenconcepts: {
        title: 'inGen Concepts',
        desc: 'inGen Concepts is a web development business that focuses on building impactive and professional websites that create a memorable and engaging user experience.',
        link: 'http://www.ingenconcepts.com'
    },
    chargersignup: {
        title: 'Charger Alumni',
        desc: 'This is a sign up page for the Cypress College Alumni and student network.',
        link: 'http://www.chargeralumni.org'
    },
    tictactoe: {
        title: 'Tic Tac Toe',
        desc: 'This is a classic Tic Tac Toe game.',
        link: 'http://www.ingenconcepts.com/tictactoe'
    },
    matchwars: {
        title: 'Match Wars',
        desc: 'Match Wars is a Star Wars themed card matching game to test your memory.',
        link: 'http://www.ingenconcepts.com/matchwars'
    },
    twailerz: {
        title: 'Twailerz',
        desc: 'Twailerz is a website that connects the latest tweets via twitter about an upcoming movie and connects it with that trailer.',
        link: 'http://www.ingenconcepts.com/twailerz'
    },
    marounrecords: {
        title: 'Maroun Records',
        desc: 'Maroun Records is music label website for supporting up and coming artists.',
        link: 'http://www.ingenconcepts.com/marounrecords'
    }
};






