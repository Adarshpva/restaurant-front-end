import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard'
import { base_Url } from '../../baseUrl'
import { RestaurantListAction } from '../../Actions/allrestaurantAction'
import { useDispatch, useSelector } from 'react-redux'

function Allrestaurant() {

  // to dispatch action
  const dispatch = useDispatch()

  // create a state 
  const [allitems, setallitems] = useState([])


  // port for api call
  const fetchData = async () => {
    const response = await axios.get(`${base_Url}/restaurants`)
    setallitems(response.data)
  }

  // console.log(allitems);


  // select  updated states from store
  const {allrestaurants} = useSelector(state=>state.allrestaurantReducer)
  console.log(allrestaurants);

  useEffect(() => {
    //fetchData()
    dispatch(RestaurantListAction())
  }, [])




  return (

    <Row>
      {
        allrestaurants.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3} >
            <RestaurantCard restaurant={item}/>
          </Col>
        ))

      }


    </Row>
  )
}

export default Allrestaurant