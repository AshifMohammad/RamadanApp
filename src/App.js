import React from 'react'
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';

const history = createBrowserHistory();
const App = () => {
    return (
        <div>
            <Router history={history} >
                <Route
                    exact
                    path="/"
                    component={Homepage}
                />
                <Route
                    exact
                    path="/about"
                    component={AboutUs}
                />
                {/* <Route
                        exact
                        path='/aboutus'
                        component={AboutUs}
                    /> */}

            </Router>

        </div>
    )
}
export default App;