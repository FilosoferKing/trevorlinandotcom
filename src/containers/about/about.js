import React, { Component } from 'react';
/* CSS Styles for About */
import styles from './about.css';

export default class About extends Component {
    constructor (props) {
        super(props);
        this.state = {
            preLoadComplete: false
        }

    }

    componentWillMount = () => {
        this.preLoadTitleDiv();
    };

    render() {
        return (
            <div className={styles.aboutContainer} >
                {this.state.preLoadComplete?this.titleDiv():''}
                <div className={styles.infoDiv}>
                    <div className={styles.textDiv}>
                        <div className={styles.linesTop}></div>
                        {this.aboutText()}
                        <div className={styles.linesBottom}></div>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Set up title display
     */
    preLoadTitleDiv = () => {
        this.titleDiv = () => {
            return (
                <div className={styles.titleDiv}>
                    <div className={styles.aboutTitle}>
                        <img src="../../../public/images/about_hiimtrevor.png" />
                        <h3>Web Developer from Orange County, Ca</h3>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        <img src="../../../public/images/about_trevor_alt.jpg" />
                    </div>
                </div>
            );
        };

        this.preLoadCallBack(true);
    };

    preLoadCallBack = (bool) => {
        this.setState({
            preLoadComplete: bool
        });

    };

    /**
     * About page text
     * @returns about text
     */
    aboutText = () => {
        return (
            <p> My name is <span className={styles.name}>Trevor Linan</span> and my <span className={styles.name}>passion</span> has guided me to a life where not a single day
                goes by that I don&#39;t love writing code and designing the connection between a web
                page and its user. As cold and robotic as the interaction may seem between technology
                and it&#39;s users, I feel that as a compassionate and empathetic developer, it is my
                responsibility to make each interaction feel as warm and valuable as possible,
                mimicking that of its predecessor; genuine human interaction. With marketing and
                media having the dominant influence it does, we as humans must take responsibility
                for making those interactions as positive and helpful as possible, which means being
                held accountable for every page served to a person on the other end of the code.
                I believe with this mentality and philosophy, technology will blossom into a beautiful
                human experience and I will have been proud to be a part of it creating one genuine
                website interaction at a time.
            </p>
        );
    }

}




