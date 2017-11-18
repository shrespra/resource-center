import React from "react";

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RightCol from "./RightCol";
import MidCol from "./MidCol";
import LeftCol from "./LeftCol";

import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Icon from "../Components/Icon";
import TitleBar from "../Components/TitleBar";
import "../Components/styles.css"
import PropTypes from 'prop-types';
import {Link} from "react-router";
import AppBar from 'material-ui/AppBar';




const style = {
  margin: 12,
};
export default class Layout  extends React.Component {

  render() {
    return (
      
      <div>
      
      <TitleBar/>
    
      <div class="leftpane">
      <LeftCol/>
      </div>

      <div class="middlepane">
      

      {this.props.children}
      <Link to="midCol"> MidCol </Link>
      

      </div>

      <div class="rightpane">
      {this.props.children}
      <Link to="rightCol"> RightCol </Link>
      </div>

      </div>


      


      
      
     

    );
  }
}