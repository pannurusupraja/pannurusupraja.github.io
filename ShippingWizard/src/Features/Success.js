import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import randomString from 'random-string';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  trackid = () => {
    const  trackid = randomString({
      length: 8,
      numeric: true,
      letters: false,
      special: false,
      exclude: ['1']
    });
    return trackid;
   };

  render() {
  
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"/>
          <br />
          <br />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further tracking</p>
          <h3>Tracking Id -  {this.trackid()}</h3>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
