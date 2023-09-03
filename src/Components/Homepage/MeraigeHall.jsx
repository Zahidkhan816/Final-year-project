import React, { useState, useEffect } from 'react';

const MeraigeHall = () => {
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3001/posts')
      .then((response) => {
        // Handle response and set filteredData state
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const filteredItems = data.filter((item) => item.serviceType === 'Meraige Hall');
        setFilteredData(filteredItems);
        console.log(filteredData, "Meraige Hall")
      })
      .catch((error) => {
        console.error(error, 'error');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <section className="py-5" id="MeraigeHall">
        <div>
          <div className="row">
            <div className="col-12 py-3">
              <h1 className="text-center">RECENT BLOGPOSTS</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          {filteredData.map((item, index) => (
            <div key={index} className="col-sm-6 col-lg-3 mb-4">
              <div className="card h-100 shadow card-span rounded-3">
                <img
                  className="card-img-top rounded-top-3"
                  src={item.image} style={{width:"250px" , height:"250px"}}
                  alt="Marriage Hall"
                />
                <div className="card-body">
                  <span className="fs--1 text-primary me-3">
                    {item.serviceType}
                  </span>
                  <svg
                    className="bi bi-calendar2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {/* Calendar icon */}
                  </svg>
                  <span className="fs--1 text-900">{item.date}</span>
                  <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                    {item.name}
                  </h5>
                  <a className="stretched-link" href="#!">
                    read full article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeraigeHall;
