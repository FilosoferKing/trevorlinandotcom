import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* CSS Styles for Skills */
import styles from './skills.css';
/* Material UI Components */
import CirclePaper from '../../components/paper';
/* Tooling */
import _ from 'underscore';

export default class Skills extends Component {
    constructor (props) {
        super(props);


    }

    render() {
        return (
            <div className={styles.skillsContainer}>
                <div className={styles.mobileTitle}>
                    <img src="../../../public/images/skills_skillstitle.png" />
                </div>
                <div className={styles.paperDivs}>
                    {this.listSkillSetTitles()}
                </div>
                <div className={styles.skillsDivs}>
                    <div className={styles.paperDivsHorizontal}>
                        <img src="../../../public/images/skills_skillstitle.png" />
                    </div>
                    {this.listSkillSets()}
                </div>
            </div>
        );
    }

    /**
     * Load skill set title divs
     * @returns {Array}
     */
    listSkillSetTitles = () => {
        let skillSet = ['Front End', 'Back End', 'Dev Tools', 'Creative'];
        return _.map(skillSet, function(skillSet) {
            return (
                <div className={styles.circlePaperContainer}>
                    <div className={styles.pseudoPaperContainer}></div>
                    <CirclePaper paperStyle={styles.paper1} backgroundColor={localStyles.paper.skillSetBackgroundColor} text={skillSet}/>
                </div>
            );
        })
    }

    /**
     * Load skills divs
     * @returns {Array}
     */
    listSkillSets = () => {
        let frontEndSkillSet = ['HTML5', 'CSS3', 'JavaScript', 'ReactJS w/ Redux & Webpack', 'jQuery', 'AJAX', 'Bootstrap'];
        let backEndSkillSet = ['Node.js w/ Express', 'MongoDB', 'PHP', 'MySQL',  null,  null,  null];
        let devToolsSkillSet = ['Chrome DevTools', 'Git', 'Github', 'PhpStorm', 'MAMP',  null,  null];
        let creativeSkillSet = ['Photoshop', null, null, null, null, null, null];
        let skillSetsArray = [frontEndSkillSet, backEndSkillSet, devToolsSkillSet, creativeSkillSet];

        let skillSetsMap = _.map(skillSetsArray, function (skillSet){
             return _.map(skillSet, function(skill) {
                 if (skill) {
                     return (
                         <div className={styles.circlePaperContainer} >
                             <CirclePaper paperStyle={styles.paper1} backgroundColor={localStyles.paper.skillsBackgroundColor} text={skill}/>
                         </div>
                     );
                 } else {
                     return (
                         <div className={styles.circlePaperContainer} >

                         </div>
                     );
                 }
             })
        });

        return _.map(skillSetsMap, function (skillSet) {
            return (
                <div className={styles.paperDivsHorizontal}>
                    {skillSet}
                </div>
            );
        })

    }

}

const localStyles = {
    paper: {
        skillSetBackgroundColor: '#E7BD3B',
        skillsBackgroundColor: 'rgba(65, 203, 163, .9)'
    }
};




