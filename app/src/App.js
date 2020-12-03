import React from 'react'

import fetchjobs from './fetchjobs';
import {Container} from 'react-bootstrap';

function App() {

  
    //Using Hooks to return the jSOn data
  const {jobs, loading, error} =  fetchjobs()
  return (

    <Container>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error occured</h1>}
      <h1>{jobs.length}</h1>
    </Container>
    
  );
}

export default App;
