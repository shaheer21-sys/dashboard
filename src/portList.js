import React, { Component } from 'react';
import PortData from './mydata/portData.json';

export default class portList extends Component {
    render() {
        return (
            <div>
                <h1>portData</h1>
                {PortData.map((portDetail , index) => {
                    return <h1>{portDetail.}</h1>
                } )}
            </div>
        )
    }
}
