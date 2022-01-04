import './App.css';
import { Router } from "@reach/router";
import ConventionForm from './components/ConventionForm';
import ConventionList from './components/ConventionList';
import Details from './components/Details';
import EditCelebrity from './components/EditCelebrity';

function App() {
  return (
    <div className="App">
      <h1>Convention Organizer App</h1>
      <Router>
        {/* <Login />
        <Register /> */}
        <ConventionForm path="/convention-creator" />
        <ConventionList path="/all-conventions" />
        <Details path="/convention/:id" />
        <EditCelebrity path="/celebrities/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
