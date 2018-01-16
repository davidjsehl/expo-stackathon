import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';


export default class CourtMapView extends Component {

    state = {
        mapLoaded: false,
        region: {
            latitude: 40.758896,
            longitude: -73.985130,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    componentDidMount() {
        this.setState({ mapLoaded: true })
    }

    onRegionChangeComplete = (region) => {
        console.log(region)
        this.setState({ region })
    }

    render() {
        if (!this.state.mapLoaded) {
            return(
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }}
                    region={this.state.region} 
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
        )
    }
}
