import React from "react";
import Button from 'react-bootstrap/Button';


const Jumbotron =()=>{
    return (
        <>
          <div className="container bg-secondary-subtle">
            <div className="mx-0">
              <h1 className="mb-0 fw-normal">A Warm Welcome!</h1>
                  <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                voluptate tempore quidem sint, nisi totam harum doloremque. Ipsam
                quibusdam, voluptatum nisi nam, voluptates repellendus quasi
                possimus velit rem molestias perspiciatis.
              </p>
          
              <div className="my-3">

              <Button variant="primary">Call to action!</Button>{' '}
              </div>
            </div>
          </div>
        </>
      );
    };
export default Jumbotron;