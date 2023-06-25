import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap';

function Restreview({reviews}) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button 
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Client Reviews
        </Button>
        <Collapse in={open}>
          <div className='mt-2' id="example-collapse-text">
           {
            reviews?.map(item=>(
                <div className='border p-2 mt-2 rounded '>
                    <h6> {item.name} : ({item.date})</h6>
                    <p>Rating:{item.rating}</p>
                    <p>Comments:{item.comments}</p>

                </div>
            ))
           }
          </div>
        </Collapse>
      </>
    );
  }
  
export default Restreview