import React, {Component} from 'react';
import ButtonAppBar from './Components/ButtonAppBar'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dashboard from './Components/Dashboard'
import './App.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
    }
  }
  
  handleClick = () => {
    this.setState({
        loggedIn: !this.state.loggedIn
  
    })
    this.handleClick.bind(this)
};

  render() {
    return this.state.loggedIn ? 
        (<div>
          <ButtonAppBar />
          <Dashboard /> 
        </div>)
          : (
        <div>
        <ButtonAppBar />
        <div className="login">
        <TextField className="username"
          id="username"
          placeholder="username"
          margin="normal"
          variant="outlined">
        </TextField>
        <TextField className="password"
          id="password"
          placeholder="password"
          margin="normal"
          variant="outlined" color="white"></TextField> 
         <Button onClick={this.handleClick} variant="contained" color="secondary">Login</Button>
         </div>
         </div>
          )
          
  
}
}

export default App;
