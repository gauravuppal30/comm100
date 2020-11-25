import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Problem1 from "../problem/Problem1";
import Problem2 from "../problem/Problem2";
import Problem3 from "../problem/Problem3";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="main-container">
      <Router>
        <div className="container-fluid">
          <div className="row">
            <ul className="navbar navbar-dark bg-dark justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/p1">
                  Problem 1
                </Link>

                <Link className="nav-link" to="/p2">
                  Problem 2
                </Link>

                <Link className="nav-link" to="/p3">
                  Problem 3
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <Route exact path="/" component={HomePlanets} /> */}
        <Route exact path="/p1" component={Problem1} />
        <Route exact path="/p2" component={Problem2} />
        <Route exact path="/p3" component={Problem3} />
      </Router>
    </div>
  );
}
