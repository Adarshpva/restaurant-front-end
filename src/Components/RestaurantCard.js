import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function RestaurantCard({ restaurant }) {
    console.log(restaurant);
    return (

<Link to={`/view/${restaurant.id}`} style={{textDecoration:'none',color:'white'}}>
    
            <Card className='m-3' >
                <Card.Img variant="top" src={restaurant.photograph} />
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                        <p>{restaurant.neighborhood}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
    
    
</Link>
    )
}

export default RestaurantCard