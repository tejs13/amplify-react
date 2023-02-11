import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard/Screens/Dashboard';
import HomeScreen from './HomeScreen/Screens/HomeScreen';

class AppRouters extends React.Component {
    state = {}


    render() {
        return (
                <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>

                    <Route path='/Dashboard' element={<Dashboard/>} />

                </Routes>

        )
    }
}

export default AppRouters