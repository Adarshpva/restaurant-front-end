import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_Url } from '../baseUrl';
import axios from 'axios';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import RestOp from './RestOp';
import Restreview from './Restreview';


function ViewRestaurant() {
  // how to get path parameter from route associate with a component
  const { id } = useParams()

  // console.log(id);
  // state to hold restaurant details
  const [restaurantDetail, setRestaurantdetail] = useState({})
  // api call to get a particular restaurant details
  const fetchData = async () => {
    const { data } = await axios.get(`${base_Url}/restaurants/${id}`)
    setRestaurantdetail(data);
  }

  // console.log(restaurantDetail);

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
{
     restaurantDetail&&
        <Row className='p-5'>
          <Col sm={12} md={3}>
            {/* image */}
            <Image className='rounded border p-1' src={`${restaurantDetail?.photograph}`} alt='restaurant' fluid />
          </Col>
          <Col md={1}> </Col>
          <Col md={8}>
            <h2> {restaurantDetail?.name} </h2>
            <h6>{restaurantDetail?.neighborhood} </h6>
            <ListGroup className='mt-5'>
              <ListGroup.Item>
                <h5>Cusine :{restaurantDetail?.cuisine_type}</h5> 
               </ListGroup.Item>
  
              <ListGroup.Item>
                <RestOp op={restaurantDetail?.operating_hours}/>
              </ListGroup.Item>
  
              <ListGroup.Item>
                <Restreview reviews={restaurantDetail?.reviews}/>
              </ListGroup.Item>
  
            </ListGroup>
          </Col>
  
        </Row>
  

   }
      </>
  )
}

export default ViewRestaurant