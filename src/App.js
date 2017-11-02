import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import iconStyles from './index.css';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 50};

injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="App">
      <AppBar
        title="CS 476 Project"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
      />

      <Drawer
        open={this.state.open}
        docked={false}
        onRequestChange={(open) => this.setState({open})}
      >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

        <div>
          <Avatar
          icon={<HardwareVideogameAsset />}
          //color={orange200}
          //backgroundColor={pink400}
          size={150}
          style={style}
          />
        </div>

        <div>
        <RaisedButton
          label="Login With Discord"
          width={'300px'}
          primary={true}
          style={iconStyles}
          />
        </div>

          




      </div>
    );
  }
}

export default App;
