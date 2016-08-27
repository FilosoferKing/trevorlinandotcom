import React, { Component } from 'react';

// Material-UI Theme Provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customMuiTheme from './material-ui/custom_theme';

import Navigation from './containers/navigation/navigation';
import styles from './app.css'

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={customMuiTheme} fluid={true}>
            <AppContainer style={styles.app}/>
        </MuiThemeProvider>
    );
  }
}

class AppContainer extends Component {
    render() {
        return (
            <Navigation />
        );
    }
}
