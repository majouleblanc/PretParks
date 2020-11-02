import React, { Component } from 'react';
import './App.css';
import Home from  './Home';
import List from  './List';
import Detail from  './Detail';
import Header from './Header';

class App extends Component {
  
routing = (action, data) => {
    
      switch (action) {
        case 'Home' : 
          this.route = <Home action={this.handleClick}/>;
          break;
        case 'List' :
          this.route = <List action={this.handleClick}/>
          break;
        case 'Detail' :
          this.route = <Detail action={this.handleClick} data={data}/>
          break;
        default :
          this.route = <Home action={this.handleClick} />
          break;
      }
      this.setState({ action: this.route });
  };  
  
  handleClick = (action, key) => {
            this.routing(action, key);
  }
  
  route = <Home action={this.handleClick} />

  render() {
    return (
        <div>
        <Header/>
        {this.route}
        </div>
    );
  }
}

export default App;
