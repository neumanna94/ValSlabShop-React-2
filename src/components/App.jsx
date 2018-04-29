import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing/Landing';
import Marketplace from './Marketplace/Marketplace';
import About from './About/About';
import NewContactForm from './About/NewContactForm';
import NewSlabForm from './Admin/NewSlabForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterSlabList: [],
      masterContactList: [],
    };
    console.log(this);
    this.handleNewSlabFormSubmission = this.handleAddingNewSlabToList.bind(this);
    this.handleNewContactFormSubmission = this.handleAddingNewContactToList.bind(this);
  }

  handleAddingNewSlabToList(newSlab){
    var newMasterSlabList = this.state.masterSlabList.slice();
    newMasterSlabList.push(newSlab);
    this.setState({masterSlabList:newMasterSlabList});
  }
  handleAddingnewContactToList(newContact){
    var newMasterContactList = this.state.masterContactList.slice();
    newMasterContactList.push(newContact);
    this.setState({masterContactList:newMasterContactList});
  }

  render(){
    return (
      <div>
        <style jsx global>{`
          body {
            font-family: Helvetica;
            color: black;
            background-color: white;
          }
        `}</style>
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
