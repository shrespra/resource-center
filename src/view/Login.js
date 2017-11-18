import React from "react";

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RightCol from "./RightCol";
import MidCol from "./MidCol";

import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Icon from "../Components/Icon";
import TitleBar from "../Components/TitleBar";
import "./style.css"
import PropTypes from 'prop-types';
import {Link} from "react-router";



const style = {
  margin: 12,
};
export default class Login  extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      <div class="center">
      <TitleBar/>
      <Icon/>
      <Button/>

      </div>
      </MuiThemeProvider>
      
     

    );
  }
}