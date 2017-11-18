import React from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};
export default class TitleBar  extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      <AppBar title="CS 476 Project"/>
      <br/>
      </MuiThemeProvider>
      
    );
  }
}

