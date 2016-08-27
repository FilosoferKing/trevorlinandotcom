import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './skills.css';
import CirclePaper from '../../components/paper';
import About from '../about/about';
import _ from 'underscore';

export default class Skills extends Component {
    constructor (props) {
        super(props);


    }

    render() {
        return (
            <div className={styles.skillsContainer}>
                <div className={styles.mobileTitle}>{this.props.titleImage}</div>
                <div className={styles.paperDivs}>
                    {this.listSkillSetTitles()}
                </div>
                <div className={styles.skillsDivs}>
                    <div className={styles.paperDivsHorizontal}>
                        {this.props.titleImage}
                    </div>
                    {this.listSkillSets()}
                </div>
            </div>
        );
    }

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
}




