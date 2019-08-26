import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export class ReceiverDetails extends Component {
  continue = e => {
    e.preventDefault();
    const { values  } = this.props;
    if (!values.r_Name) {
      alert('Name Required');
    }
    else if (!values.r_address) {
      alert('Address Required');
    }
    else if(!values.r_pincode || !values.r_pincode.match(/^\d{6}$/))
    {
      alert('Invalid/Empty PINCODE');
    }
    else if(!values.r_phone || !values.r_phone.match(/^([6-9]\d{9})$/))
    {
      alert('Invalid/Empty MobileNumber');
    }
    else if(!values.shippingWeight )
    {
      alert('ShippingWeight Required');
    }
    else
    {
      this.props.nextStep();

    }

    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  

  render() {
  
    const { values, handleChange } = this.props;
     
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h2>Enter Shipping Details</h2>
          <TextField
          required
            placeholder="Enter Your Full Name"
            label="FullName"
            onChange={handleChange('r_Name')}
            defaultValue={values.r_Name}
            margin="normal"
        variant="outlined"
          />
          <br />
         
          <TextField
          required
            placeholder="Enter Your Address"
            label="Address"
            onChange={handleChange('r_address')}
            defaultValue={values.r_address}
            fullWidth
            margin="normal"
        variant="outlined"
          />
          <br />
         
          <TextField
          required
            placeholder="Enter Postal Code"
            label="Zip/Postal Code"
            onChange={handleChange('r_pincode')}
            defaultValue={values.r_pincode}
            margin="normal"
        variant="outlined"
          />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
          required
            placeholder="Enter MobileNumber"
            label="MobileNumber"
            onChange={handleChange('r_phone')}
            defaultValue={values.r_phone}
            margin="normal"
        variant="outlined"
          /><br />
          <h3>Package Details</h3>
          <MuiExpansionPanel >
        <MuiExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Package Details</Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails>
          <Typography>
          <TextField
            placeholder="Enter Weight in grms"
            label="Shipping weight"
            onChange={handleChange('shippingWeight')}
            defaultValue={values.shippingWeight}
            margin="normal"
        variant="outlined"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl component="fieldset" >
        <FormLabel component="legend">Shipping Priority</FormLabel>
        <RadioGroup
          aria-label="priority"
          name="priority1"
          defaultValue={values.priorityValue}
          onChange={handleChange('priorityValue')}
        >
          <FormControlLabel value="1" control={<Radio />} label="Ground" />
          <FormControlLabel value="2" control={<Radio />} label="Prioirty" />
         
        </RadioGroup>
      </FormControl>
          </Typography>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>
         
      <br /><br />
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
    justifyContent: 'center',
    margin: 15,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 38,
    padding: '0 30px',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
  },
  root: {
    width: '100%',
  },
  
};

export default ReceiverDetails;
