import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing/Landing';
import Marketplace from './Marketplace/Marketplace';
import About from './About/About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path ='/' component={Landing} />
          <Route exact path ='/View/Marketplace' component={Marketplace} />
          <Route exact path ='/About' component={About} />
          <Route component = {Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }

}

export default App;
