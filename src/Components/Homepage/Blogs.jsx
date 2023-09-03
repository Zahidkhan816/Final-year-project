import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [getData, setGetData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to fetch data
  const fetchData = () => {
    fetch('http://localhost:3001/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');

        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('New', JSON.stringify(data));
        console.log("im data", data)
        if (data.length === 0) {
          alert('No Task is in To Do List');
        }
        setGetData(data);
      })
      .catch((error) => {
        console.error(error, 'error');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleModalOpen = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <section className="py-5" id="Blogs">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: 'url(assets/img/gallery/blog-post.png)',
                  backgroundPosition: 'top center',
                  backgroundSize: 'contain',
                }}
              ></div>
              <h1 className="text-center">RECENT BLOGPOSTS</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage: 'url(assets/img/gallery/dot-bg.png)',
            backgroundPosition: 'top left',
            backgroundSize: 'auto',
          }}
        ></div>
        <div className="container">
          <div className="row">
            {getData.map((item, index) => (
              <div key={index} className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src={item.image} style={{width:"250px" , height:"250px"}}
                    // src='https://picsum.photos/200/250'
                    alt="news"
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
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                      />
                      <path
                        d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                      >
                        {' '}
                      </path>
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
    </>
  );
};

export default Blogs;
