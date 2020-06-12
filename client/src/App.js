import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");
  const [days, setDays] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/facebook", { email, password, group });
  };
  return (
    <div className="App">
      <div className="dashboard">
        <h1>The Golden Snitch</h1>
        <div class="dashboard__tool">
          <h3 className="dashboard__toolHeading">Group Snapshot</h3>
          <form className="dashboard__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="dashboard__input-group">
              <label for="email">Email</label>
              <input
                placeholder="or whatever you use to login"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                class="dashboard__input"
              />
            </div>
            <div className="dashboard__input-group">
              <label for="password">Password</label>
              <input
                placeholder="trust me"
                name="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                class="dashboard__input"
              />
            </div>
            <div className="dashboard__input-group">
              <label for="group">Group</label>
              <input
                placeholder='part of url after "groups/"'
                name="group"
                value={group}
                type="text"
                onChange={(e) => setGroup(e.target.value)}
                class="dashboard__input"
              />
            </div>
            <div className="dashboard__input-group">
              <label for="email">Days</label>
              <input
                placeholder="days"
                name="days"
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                class="dashboard__input"
              />
            </div>

            <button type="submit" className="dashboard__button">
              Snitch!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
