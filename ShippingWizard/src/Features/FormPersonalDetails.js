import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  onChange = (state) => {
    this.setState(state);
  }

  render() {
    const { values} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
         
          <br />
          <br />
          <Button
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          >Back</Button>
          <Button
            label="Continue"
            primary={true}
            style={styles.button} onClick={this.continue}
          >Continue</Button>
          
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails;
