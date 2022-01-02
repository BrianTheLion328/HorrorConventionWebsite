import './App.css';
import { Router } from "@reach/router";
import ConventionForm from './components/ConventionForm';
import ConventionList from './components/ConventionList';
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <h1>Convention Organizer App</h1>
      <Router>
        <ConventionForm path="/convention-creator" />
        <ConventionList path="/all-conventions" />
        <Details path="/convention/:id" />
      </Router>
    </div>
  );
}

export default App;
