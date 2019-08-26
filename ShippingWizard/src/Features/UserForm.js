import React, { Component } from 'react';
import SenderDetails from './SenderDetails';
import ReceiverDetails from './ReceiverDetails';
import Confirm from './Confirm';
import Success from './Success';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';


export class UserForm extends Component {
  state = {
    step: 1,
    steps: [
      {title: 'Sender Details'},
      {title: 'Shipping Details'},
      {title: 'Confirm Details'},
      {title: 'Confirm Details'},
    ],
    
    s_Name:'',
    r_Name: '',
    s_phone: '',
    r_phone:'',
    s_address:'',
    r_address: '',
    s_pincode: '',
    r_pincode:'',
    priorityValue:'',
    shippingWeight:'',

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step,steps } = this.state;
    const { s_Name,r_Name,s_phone,r_phone,s_address,r_address,s_pincode,r_pincode,priorityValue,shippingWeight } = this.state;
    const values = { s_Name,r_Name,s_phone,r_phone,s_address,r_address,s_pincode,r_pincode,priorityValue,shippingWeight };
   return(
    <React.Fragment>
    <Card>
        <Stepper steps={ steps } activeStep={ step-1 } />
        {step === 1 && (
          <SenderDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )}
        {step === 2 && (
          <ReceiverDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )}
        {step === 3 && (
          <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
        )}
         
         {step === 4 && <Success />}
      </Card>
      </React.Fragment>

    )

  }
}

export default UserForm;
