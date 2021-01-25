import React from "react"
import {Link} from "react-router-dom"
import '../App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="App-header">Home page</h1>
        <p>this is the body of the home page, hello word</p>
        <Link to="/other">Next</Link>
      </div>
    </div>
  );
}

export default App;
