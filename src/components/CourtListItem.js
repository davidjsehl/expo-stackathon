import React, { Component } from 'react';
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class CourtListItem extends Component {

    onRowPress() {
        Actions.singleCourtView({ court: this.props.court });
    }

    render() {

        const { Location, Name, Accessible, lat, lon } = this.props.court;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
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
                    </Card>
                </View>
            </TouchableWithoutFeedback>
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
    }
}

export default CourtListItem;