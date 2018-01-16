import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { getCourtsThunk } from '../store/CourtReducer';
import CourtListItem from './CourtListItem';


export class CourtList extends Component {

    componentWillMount() {
        this.props.getCourtsThunk();
        this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }
    
    createDataSource({ courts }) {  
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(courts);
    }

    renderRow(court) {
        return <CourtListItem court={court} />
    } 

    render () {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
         courts: state.courts
    }
}

const CourtListContainer = connect(mapStateToProps, { getCourtsThunk })(CourtList);
export default CourtListContainer;