import './App.css';
import { Router } from "@reach/router";
import ConventionForm from './components/ConventionForm';
import ConventionList from './components/ConventionList';
import Details from './components/Details';
import EditCelebrity from './components/EditCelebrity';
import EditConvention from './components/EditConvention';
import LogReg from "./views/LogRes";
import Header from "./views/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      {/* <h1>Convention Creator</h1> */}
      <Header />
      <Router>
        <LogReg path="/" />
        <ConventionForm path="/convention-creator" />
        <ConventionList path="/all-conventions" />
        <Details path="/convention/:id" />
        <EditCelebrity path="/celebrities/:id/edit/:conventionId" />
        <EditConvention path="/convention/:id/edit" />
      </Router>
      <br />
      <Footer />
    </div>
  );
}

export default App;
