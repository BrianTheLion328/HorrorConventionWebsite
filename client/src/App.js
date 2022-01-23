import './App.css';
import { Router } from "@reach/router";
import ConventionForm from './components/ConventionForm';
import ConventionList from './components/ConventionList';
import Details from './components/Details';
import EditCelebrity from './components/EditCelebrity';
import EditConvention from './components/EditConvention';
import LogReg from "./views/LogRes";
import Header from "./views/Header";

function App() {
  return (
    <div className="App">
      {/* <h1>Convention Creator App</h1> */}
      <Header />
      <hr style={{width: "80%", margin: "auto"}}/>
      <Router>
        <LogReg path="/" />
        <ConventionForm path="/convention-creator" />
        <ConventionList path="/all-conventions" />
        <Details path="/convention/:id" />
        <EditCelebrity path="/celebrities/:id/edit/:conventionId" />
        <EditConvention path="/convention/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
