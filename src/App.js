import './App.css';
import { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirstForm } from './component/FirstForm'
import { SecondForm } from './component/SecondForm'
import { FinalResult } from './component/FinalResult'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <Fragment>
        <Router>
          <Switch>
            <DataProvider>
              <Route path="/" exact component={FirstForm}></Route>
              <Route path="/second" exact component={SecondForm}></Route>
              <Route path="/final" exact component={FinalResult}></Route>
            </DataProvider>
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
