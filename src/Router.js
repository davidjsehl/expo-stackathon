import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CourtList from './components/CourtList';
import { SingleCourtView } from './components/SingleCourtView';
import CourtMapView from './components/CourtMapView';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login"
                        component={LoginForm}
                        title="Please Log In"
                        initial
                        />       
                </Scene>

                <Scene key="main">
                    <Scene
                        key="courtList"
                        component={CourtList}
                        title="All Courts"
                        rightTitle="Map View"
                        onRight={() => Actions.courtMapView()}
                        initial
                        />
                    <Scene 
                        key="singleCourtView"
                        component={SingleCourtView}
                        title="Single Court"
                    />
                    <Scene 
                        key="courtMapView"
                        component={CourtMapView}
                        title="Map View"
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;