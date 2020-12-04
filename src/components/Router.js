import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import ProjectsScreen from '../screens/ProjectsScreen/ProjectsScreen';
import AddTimeline from '../screens/AddTimeline/AddTimeline';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginScreen} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/register" component={RegisterScreen} />
                <Route exact path="/dashboard" component={DashboardScreen} />
                <Route exact path="/projects" component={ProjectsScreen} />
                <Route exact path="/addTime" component={AddTimeline} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
