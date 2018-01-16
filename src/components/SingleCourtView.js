import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Button } from './common';

export class SingleCourtView extends Component {
    render () {
        // console.log(this.props.court)
        const { Location, Name, Accessible, lat, lon } = this.props.court;
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainer}>
                        <Image style={styles.thumbnailStyle}
                            source={require('../public/courtThumbnail.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.courtName}>{Name}</Text>
                        <Text>{Location}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={styles.imageStyle}
                        source={require('../public/courtThumbnail.jpg')}
                    />
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: .75
    },
    thumbnailStyle: {
        height: 50,
        width: 75
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    courtName: {
        fontSize: 17
    },
    imageStyle: {
        height: 275,
        flex: 1,
        width: null
    }
}