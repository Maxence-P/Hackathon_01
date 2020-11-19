import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Quiz />
      {/* <Switch>
        <Route exact path="/" component={History} />
        <Route path="/Quiz" component={Quiz} />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
