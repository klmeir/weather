import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [consult, setConsult] = useState(false);

  const { city, country } = search;

  useEffect(() => {    
    const getDataAPI = async () => {

    }
    getDataAPI();
  }, [consult])

  return (
    <Fragment>
      <Header 
        title="Clima React App"
      />

      <div className="contenedor-form">
        <div className="row">
          <div className="col m6 s12">
            <Form 
              search={search}
              setSearch={setSearch}
              setConsult={setConsult}
            />
          </div>
          <div className="col m6 s12">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
