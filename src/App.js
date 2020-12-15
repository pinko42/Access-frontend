import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
