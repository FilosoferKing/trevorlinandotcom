import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { navigationRoute } from '../../actions/index';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationItem from '../../components/navigation_item';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import styles from './navigation.css';
import SvgIcon from 'material-ui/SvgIcon';
import Lander from '../lander/lander';




export default class Navigation extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: false,
            screenWidth: 0,
            menuType: localStyles.menuItem,
            menuButtonOpenType: localStyles.buttonOpen,
            menuButtonClosedType: localStyles.buttonClosed
        };

        // call home on initial site load
        this.props.navigationRoute('home');
    }

    componentDidMount = () => {

    };

    render() {
        return (
            <div ref="navWindow">
                <div
                    className={this.state.open ? styles.menuIconOpen : styles.menuIcon}
                    style={this.state.open ? this.state.menuButtonOpenType : this.state.menuButtonClosedType}
                    onTouchTap={this.handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <Drawer
                    className={styles.drawer}
                    style={localStyles.drawerStyle}
                    open={this.state.open}
                    width={this.state.screenWidth}
                    >
                    <AppBar
                        style={{'primary1Color': 'transparent'}}
                        title=""
                        iconElementLeft={<IconButton></IconButton>}
                        iconElementRight={<IconButton></IconButton>}
                        onTouchTap={this.handleToggle}
                        />
                    <MenuItem style={this.state.menuType} onTouchTap={() => {
                    this.props.navigationRoute('home');
                    this.handleToggle();
                    }} >
                        Home
                    </MenuItem>
                    <MenuItem style={this.state.menuType} onTouchTap={() => {
                    this.props.navigationRoute('about');
                    this.handleToggle();
                    }} >
                        About
                    </MenuItem>
                    <MenuItem style={this.state.menuType} onTouchTap={() => {
                    this.props.navigationRoute('skills');
                    this.handleToggle();
                    }} >
                        Skills
                    </MenuItem>
                    <MenuItem style={this.state.menuType} onTouchTap={() => {
                    this.props.navigationRoute('works');
                    this.handleToggle();
                    }} >
                        Works
                    </MenuItem>
                    <MenuItem style={this.state.menuType} onTouchTap={() => {
                    this.props.navigationRoute('contact');
                    this.handleToggle();
                    }} >
                        Get In Touch!
                    </MenuItem>
                </Drawer>

                <Lander />
            </div>
        );
    }

    handleToggle = () => {
        console.log('HEY!: ', this.state.menuButtonType);
        this.setState({
            open: !this.state.open
        });
        this.adjustNavigationDrawerSize()
    }

    adjustNavigationDrawerSize = () => {
        let node = ReactDOM.findDOMNode(this.refs["navWindow"]);
        if (node){
            let calculatedWidth = node.clientWidth;
            console.log('Calculated Width: ', calculatedWidth);
            if(calculatedWidth <= 1024) {
                if(!this.state.open) {
                    this.setState({
                        screenWidth: calculatedWidth,
                        menuType: localStyles.mobileMenuItem,
                        menuButtonOpenType:localStyles.mobileButtonOpen
                    })
                } else {
                    this.setState({
                        screenWidth: calculatedWidth,
                        menuType: localStyles.mobileMenuItem,
                        menuButtonOpenType: localStyles.buttonOpen
                    })
                }
            } else {
                this.setState({
                    screenWidth: 256,
                    menuType: localStyles.menuItem,
                    menuButtonOpenType: localStyles.buttonOpen
                })
            }
        }
    };
}

const localStyles = {
    menuItem: {
        'margin' : '50px auto',
        'fontSize': '1.5em',
        'color': '#ffffff',
        'fontWeight': '400',
        'textAlign': 'center'
    },
    mobileMenuItem: {
        'margin' : '5vh auto',
        'fontSize': '3vh',
        'color': '#ffffff',
        'fontWeight': '400',
        'textAlign': 'center'
    },
    buttonOpen: {
        'marginLeft': '108px'
    },
    mobileButtonOpen: {
        'marginLeft': '50%',
        'transform': 'translateX(-50%)',
        'WebkitTransform': 'translateX(-50%)'
    },
    buttonClosed: {

    }

};

const mapStateToProps = (state) => {
    return {
        navigator: state.navigator

    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        navigationRoute: navigationRoute
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
