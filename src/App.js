import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [consult, setConsult] = useState(false);
  const [result, setResult] = useState({});

  const { city, country } = search;

  useEffect(() => {
    const getDataAPI = async () => {
      if (consult) {
        console.log("call getDataAPI");
        const appId = "5fe09f6f04c1ce67bd933fc70eac82b3";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setConsult(false);
      }
    };
    getDataAPI();
  }, [consult]);

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
            <Weather 
              result={result}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
