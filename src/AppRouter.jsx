import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard/Screens/Dashboard';
import HomeScreen from './HomeScreen/Screens/HomeScreen';

class AppRouters extends React.Component {
    state = {}


    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>

                    <Route path='/Dashboard' component={Dashboard} />

                </Switch>
             </Router>

        )
    }
}

export default AppRouters