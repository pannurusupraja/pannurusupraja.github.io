import React, { Component } from 'react';
import './App.css';
import { UserForm } from './Features/UserForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

class App extends Component {
  render() {
    const styles= {
      icon: {
        marginRight:2, 
      },
      appbar:{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      }
    };
    return (
    <React.Fragment>
      <div >
      <CssBaseline />
      <AppBar position="relative" style={styles.appbar}>
      <Toolbar>
        <LocalShippingIcon style={styles.icon} />
        &nbsp;<Typography variant="h6" color="inherit" noWrap>
          Shipping Express..
        </Typography>
      </Toolbar>
      </AppBar>
      </div>
      <br /><br />
    <div className="App">
      <UserForm />
    </div>
    </React.Fragment>
     
    );
  }
}

export default App;
