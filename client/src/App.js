import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/facebook", { email, password, group });
  };
  return (
    <div className="App">
      <div className="dashboard">
        <h1>The Golden Snitch</h1>
        <div class="dashboard__tool">
          <h3>Group Snapshot</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              class="dashboard__input"
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              class="dashboard__input"
            />
            <input
              placeholder="group"
              name="group"
              type="text"
              onChange={(e) => setGroup(e.target.value)}
              class="dashboard__input"
            />
            <button type="submit" className="dashboard__button">
              button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
