import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class Confirm extends Component {

  
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  render() {
    const shippingRate = 0.40;
    const {values: { s_Name,r_Name,s_phone,r_phone,s_address,r_address,s_pincode,r_pincode,priorityValue,shippingWeight }
    } = this.props;
    const shippingCost = shippingWeight * shippingRate * (priorityValue == 1 ? 1 : 1.5)
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div class="container">
          <h2>Shipping Details</h2>
          <br />
           <Card >
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        <h3>Shipping Address:</h3>
        </Typography>
        <Typography variant="body2" component="p">
          Name: {r_Name}
          <br />
          Address: {r_address},
          {r_pincode}
          <br />
          Ph.no:&nbsp; {r_phone}
          <br />
          <br />
          <h3>Total Amount to pay : Rs.{shippingCost} </h3>
        </Typography>
      </CardContent>
      
    </Card>
          <br /><br />
          <Button
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          >Back</Button>
          <Button
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          >Confirm & Continue</Button>
          </div>
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
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
  }
};

export default Confirm;
