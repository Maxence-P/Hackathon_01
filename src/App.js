import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Quiz from './components/Quiz';
import History from "./components/History";
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={
          props => 
          <Fragment>
            <History />
            <Footer {...props}/>
          </Fragment>
        } />
        <Route path="/:id" render={
          props => 
          <Fragment>
            <Quiz />
            <Footer {...props} />
          </Fragment>
        } />
      </Switch>
    </div>
  );
}

export default App;
