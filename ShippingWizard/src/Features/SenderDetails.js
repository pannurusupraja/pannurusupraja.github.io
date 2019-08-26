import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button';
import { string } from 'prop-types';

export class SenderDetails extends Component {
  
  continue = e => {
    e.preventDefault();
    const { values  } = this.props;
    if (!values.s_Name) {
      alert('Name Required');
    }
    else if (!values.s_address) {
      alert('Address Required');
    }
    else if(values.s_pincode =='' || !values.s_pincode.match(/^\d{6}$/))
    {
      alert('Invalid/Empty PINCODE')
    } 
    else if(values.s_phone =='' || !values.s_phone.match(/^([6-9]\d{9})$/))
    {
      alert('Invalid/Empty Mobile Number')
    }
    else
    {
      this.props.nextStep();
    }
  };
  
  render() {
  
    const { values, handleChange  } = this.props;
    
    return (
      
      <MuiThemeProvider>
        <React.Fragment>
          
          <h2>Sender Details</h2>
          <TextField
          required
            placeholder="Enter Your Full Name"
            label="FullName"
            onChange={handleChange('s_Name')}
            defaultValue={values.s_Name}
            margin="normal"
           variant="outlined"
           helperText= {this.errors}
          />
          
          <br />
        
          <TextField 
          required
            placeholder="Enter Your Address"
            label="Address"
            onChange={handleChange('s_address')}
            defaultValue={values.s_address}
            margin="normal"
        variant="outlined"
        fullWidth
        
          /><br />
         
          <TextField
          required
            placeholder="Enter Postal Code"
            label="Zip/Postal Code"
            onChange={handleChange('s_pincode')}
            defaultValue={values.s_pincode}
            margin="normal"
        variant="outlined"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <TextField
          required
            placeholder="Enter MobileNumber"
            label="MobileNumber"
            onChange={handleChange('s_phone')}
            defaultValue={values.s_phone}
            margin="normal"
        variant="outlined"
        
          />
          <br />
          <Button  style={styles.button} onClick={this.continue} floatingLabelText="Continue" >Continue</Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 38,
    padding: '0 30px',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    marginLeft:15, 
  }
  
};


export default SenderDetails;
