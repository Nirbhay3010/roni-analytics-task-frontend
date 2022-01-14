import React from 'react'
import {Card} from 'react-bootstrap'
const Cards = ({nft}) => {
    
    return (
        <div>
            <Card className="card-container" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://source.unsplash.com/random/800x800/?img=1" />
            <Card.Body>
                <Card.Title>{nft.name}</Card.Title>
                <Card.Text>
                Price: {nft.price}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards



