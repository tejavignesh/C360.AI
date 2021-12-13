import logo from './logo.svg';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Homepage from './Components/pages/Homepage';
import Applicationpage from './Components/pages/Applicationpage';
import Artificialservicepage from './Components/pages/Artificialservicepage';
import Cloudpage from './Components/pages/Cloudpage';
import Dataanalyspage from './Components/pages/Dataanalyspage';
import Devopspage from './Components/pages/Devopspage';
import Digitalpage from './Components/pages/Digitalpage';
import Productpage from './Components/pages/Productpage';
import Educationpage from './Components/pages/Educationpage';
import Automotivespage from './Components/pages/Automotivespage';
import Financepage from './Components/pages/Financepage';
import HealthCarepage from './Components/pages/HealthCarepage';
import Insurancepage from './Components/pages/Insurancepage';
import Manfacturepage from './Components/pages/Manfacturepage';
import Marketingpage from './Components/pages/Marketingpage';
import Retailpage from './Components/pages/Retailpage';
import Supplypage from './Components/pages/Supplypage';
import Telecompage from './Components/pages/Telecompage';
import Artificialinsightpge from './Components/pages/Artificialinsightpge';
import Awspage from './Components/pages/Awspage';
import Azurepage from './Components/pages/Azurepage';
import Computervisionpage from './Components/pages/Computervisionpage';
import DeepLearningpage from './Components/pages/DeepLearningpage';
import Devpage from './Components/pages/Devpage';
import FullStackpage from './Components/pages/FullStackpage';
import Machinepage from './Components/pages/Machinepage';
import NLPpage from './Components/pages/NLPpage';
import PowerBIpage from './Components/pages/PowerBIpage';
import Tabpage from './Components/pages/Tabpage';
import Aboutuspage from './Components/pages/Aboutuspage';
import Careerspage from './Components/pages/Careerspage';




function App() {
  return (
    <div>
    
    
        <Switch>
        <Route exact path ="/">
            <Homepage />
          </Route>

          <Route path ="/Applicationpage">
            <Applicationpage/>
            </Route>

            <Route path ="/Artificialservicepage">
              <Artificialservicepage />
            </Route>
            <Route path="/Cloudpage">
              <Cloudpage />
            </Route>
            <Route path="/Dataanalyspage">
              <Dataanalyspage />
            </Route>
            <Route path="/Devopspage">
              <Devopspage />
            </Route>
            <Route path="/Digitalpage">
              <Digitalpage />
            </Route>
            <Route path="/Productpage">
              <Productpage />
            </Route>
            <Route path="/Automotivespage">
              <Automotivespage />
            </Route>
            <Route path="/Financepage">
              <Financepage />
            </Route>

            <Route path="/Educationpage">
              <Educationpage />
            </Route>
            <Route path="/HealthCarepage">
              <HealthCarepage />
            </Route>
            <Route path="/Insurancepage">
              <Insurancepage />
            </Route>
            <Route path="/Manfacturepage">
              <Manfacturepage />
            </Route>
            <Route path="/Marketingpage">
              <Marketingpage />
            </Route>
            <Route path="/Retailpage">
              <Retailpage />
            </Route>
            <Route path="/Supplypage">
              <Supplypage />
            </Route>
            <Route path="/Telecompage">
              <Telecompage />
            </Route>
            <Route path="/Artificialinsightpge">
              <Artificialinsightpge />
            </Route>
            <Route path="/Awspage">
              <Awspage />
            </Route>
            <Route path="/Azurepage">
              <Azurepage />
            </Route>
            <Route path="/Computervisionpage">
              <Computervisionpage />
            </Route>
            <Route path="/DeepLearningpage">
              <DeepLearningpage />
            </Route>
            <Route path="/Devpage">
              <Devpage />
            </Route>
            <Route path="/FullStackpage">
              <FullStackpage />
            </Route>
            <Route path="/Machinepage">
              <Machinepage />
            </Route>
            <Route path="/NLPpage">
              <NLPpage />
            </Route>
            <Route path="/PowerBIpage">
              <PowerBIpage />
            </Route>
            <Route path="/Tabpage">
              <Tabpage />
            </Route>
            <Route path="/Aboutuspage">
              <Aboutuspage />
            </Route>
            <Route path="/Careerspage">
              <Careerspage />
            </Route>

            </Switch>
          
    
       </div>
  );
}

export default App;
