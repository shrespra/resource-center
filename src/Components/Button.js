import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};
export default class Button  extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      <RaisedButton label="Login With Discord" primary={true} style={style} />
      <br/>
      </MuiThemeProvider>
      
    );
  }
}