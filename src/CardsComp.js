import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import './Box.css';
import './App';
import portData from './mydata/portData.json';

export const CardsComp = () =>{


    const renderCard = (key, data, index) => {
        return(
            <div className="App">
            <Card   key = {index} className="box">
           <Card.Header className="card_title" > {key} </Card.Header>
           <ListGroup variant="flush">
            {Object.keys(data).map(v => {
                return <ListGroup.Item className="card_info"><span>{v}</span><span>+{data[v]}%</span></ListGroup.Item>
            })}
            </ListGroup>
            </Card>
        </div>
            
        );

    };

    
    return ( <div className="grid">
        {Object.keys(portData).map((v, i) => renderCard(v, portData[v], i))}
    </div> );
    
};