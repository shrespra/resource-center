import React from "react";

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RightCol from "./RightCol";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Icon from "../Components/Icon";
import TitleBar from "../Components/TitleBar";
import "../Components/styles.css"

const style = {
  margin: 12,
};
export default class MidCol  extends React.Component {

  render() {
    return (
      <div>
     
      <h1>  I am Middle Column</h1>
    	</div>
    );
  }
}