import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Quiz from './components/Quiz';
import History from "./components/History";
import { Fragment } from 'react';
import Globe from './components/Globe';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" render={
        props =>
          <Fragment>
            <NavBar {...props}/>
            <History />
            <Footer {...props}/>
          </Fragment>
        } />
        <Route path="/Quiz/:id" render={
          props =>
          <Fragment>
            <NavBar {...props}/>
            <Quiz />
            <Footer {...props} />
          </Fragment>
        } />
        <Route path="/Globe/:id" render={
          props =>
          <Fragment>
            <NavBar {...props}/>
            <Globe />
            <Footer {...props} />
          </Fragment>
        } />
      </Switch>
    </div>
  );
}

export default App;
