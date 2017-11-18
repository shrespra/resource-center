import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import Avatar from 'material-ui/Avatar';

const style = {
  margin: 12,
};
export default class Icon  extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      <Avatar
          icon={<HardwareVideogameAsset />}
          size={300}
       />
       <br/>
      </MuiThemeProvider>
      
    );
  }
}