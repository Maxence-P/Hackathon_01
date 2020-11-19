import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Switch>
        <Route exact path="/" component={History} />
        <Route path="/Quiz" component={Quiz} />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
