import React, { useState, useEffect } from 'react';

const Form = () => {
  const [getList, setGetList] = useState([]);
  const [serviceTypeOptions] = useState(["Meraige Hall", "Food", "Photography"]);
  const [staffOptions] = useState(["Male", "Female"]);
  const cityOptions = ["Select City", "Lahore", "Islamabad", "Karachi"];
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    city: "",
    serviceType: "Meraige Hall",
    price: "",
    description: "",
    parkingSpace: "",
    sittingCapacity: "",
    staff: "",
    foodItems: [],
  });

  const [updateData, setUpdaTEData] = useState({
    id: "",
    name: "",
    address: "",
    city: "",
    phone: "",
    serviceType: "",
    price: "",
    description: "",
    parkingSpace: "",
    sittingCapacity: "",
    staff: "",
  });
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
  
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Store the Base64-encoded image data in the data state
        setData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  
  const Datasubmit = () => {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        alert("Task Submitted Successfully");
        ShowList();
        setData({
          name: "",
          address: "",
          city: "",
          phone: "",
          serviceType: "",
          price: "",
          description: "",
          parkingSpace: "",
          sittingCapacity: "",
          staff: "",
          image: "", 
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ShowList = () => {
    fetch("http://localhost:3001/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("New", JSON.stringify(res));
        if (res.length === 0 || res === null) {
          alert("No Tasks in To Do List");
          setGetList([]);
        } else {
          setGetList(res);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const deleteItems = (id) => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(resp);
        alert("Task Deleted");
        ShowList();
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const updateitem = () => {
    fetch(`http://localhost:3001/posts/${updateData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(resp);
        alert("Data Updated Successfully");
        ShowList();
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  useEffect(() => {
    ShowList();
  }, []);

  const handleServiceTypeChange = (e) => {
    const selectedServiceType = e.target.value;
    setData((prevData) => ({
      ...prevData,
      serviceType: selectedServiceType,
      parkingSpace:
        selectedServiceType === "Meraige Hall" ? "" : prevData.parkingSpace,
      sittingCapacity:
        selectedServiceType === "Meraige Hall" ? "" : prevData.sittingCapacity,
      foodItems: selectedServiceType === "Food" ? [] : prevData.foodItems,
    }));
  };

  const handleFoodItemsChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      foodItems: e.target.value.split("\n"),
    }));
  };

  return (
    <div>
      <div className="form-container text-center" id='Form'>
        <h3 className="Heading">Register Your Services</h3>
        <div className="Inputs-table row">
          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputName" className="form-label">
              Name:
            </label>
            <input
              value={data.name}
              maxLength="15"
              className="form-control"
              id="exampleInputName"
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Name"
            />
          </div>
          <div className="col-lg-4 inputs">
  <label htmlFor="exampleInputImage" className="form-label">
    Image:
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="form-control"
    id="exampleInputImage"
  />
</div>

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address:
            </label>
            <input
              value={data.address}
              maxLength="35"
              className="form-control"
              id="exampleInputAddress"
              type="text"
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="Address"
            />
          </div>

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputCity" className="form-label">
              City:
            </label>
            <select
            maxLength="20"
              id="exampleInputCity"
              className="form-control"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            >
              {cityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone:
            </label>
            <input
              value={data.phone}
              maxLength="12"
              className="form-control"
              id="exampleInputPhone"
              type="text"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder="Phone"
            />
          </div>

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputServiceType" className="form-label">
              Service Type:
            </label>
            <select
              className="form-control"
              value={data.serviceType}
              onChange={handleServiceTypeChange}
            >
              {serviceTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {data.serviceType === "Food" && (
            <div className="col-lg-4 inputs">
              <label htmlFor="exampleInputFoodItems" className="form-label">
                Food Items:
              </label>
              <textarea
                value={data.foodItems.join("\n")}
                maxLength="30"
                className="form-control"
                id="exampleInputFoodItems"
                onChange={handleFoodItemsChange}
                rows="4"
                placeholder="Food Items (one per line)"
              ></textarea>
            </div>
          )}

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputPrice" className="form-label">
              Price (Per-Head):
            </label>
            <input
              type="number"
              value={data.price}
              className="form-control"
              id="exampleInputPrice"
              onChange={(e) => setData({ ...data, price: e.target.value })}
              placeholder="Price (Per-Head)"
            />
          </div>

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputDescription" className="form-label">
              Description:
            </label>
            <textarea
              value={data.description}
              maxLength="35"
              className="form-control"
              id="exampleInputDescription"
              onChange={(e) => setData({ ...data, description: e.target.value })}
              rows="4"
              placeholder="Description"
            ></textarea>
          </div>

          {data.serviceType === "Meraige Hall" && (
            <div className="col-lg-4 inputs">
              <label htmlFor="exampleInputParkingSpace" className="form-label">
                Parking Space:
              </label>
              <input
                type="number"
                value={data.parkingSpace}
                className="form-control"
                id="exampleInputParkingSpace"
                onChange={(e) =>
                  setData({ ...data, parkingSpace: e.target.value })
                }
                placeholder="Parking Space"
              />
            </div>
          )}

          {data.serviceType === "Meraige Hall" && (
            <div className="col-lg-4 inputs">
              <label htmlFor="exampleInputSittingCapacity" className="form-label">
                Sitting Capacity:
              </label>
              <input
                type="number"
                value={data.sittingCapacity}
                className="form-control"
                id="exampleInputSittingCapacity"
                onChange={(e) =>
                  setData({ ...data, sittingCapacity: e.target.value })
                }
                placeholder="Sitting Capacity"
              />
            </div>
          )}

          <div className="col-lg-4 inputs">
            <label htmlFor="exampleInputStaff" className="form-label">
              Staff:
            </label>
            <select
              className="form-control"
              value={data.staff}
              onChange={(e) => setData({ ...data, staff: e.target.value })}
            >
              {staffOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-primary rounded-pill mt-3" onClick={Datasubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="table-container mt-4">
  <div>
    <h4 className="text-center">List of Registered Services</h4>
  </div>
  <div className="table-responsive">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Phone</th>
          <th>Service</th>
          <th>Price</th>
          <th>Parking space</th>
          <th>Staff</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {getList.map((items, index) => (
          <tr key={index}>
            <td>{items.name}</td>
            <td>{items.address}</td>
            <td>{items.city}</td>
            <td>{items.phone}</td>
            <td>{items.serviceType}</td>
            <td>{items.price}</td>
            <td>{items.parkingSpace}</td>
            <td>{items.staff}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteItems(items.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() =>
                  setUpdaTEData({
                    name: items.name,
                    address: items.address,
                    city: items.city,
                    id: items.id,
                    serviceType: items.serviceType,
                    phone: items.phone,
                    staff: items.staff,
                    price: items.price,
                    parkingSpace: items.parkingSpace,
                    foodItems: items.foodItems,
                  })
                }
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="modal-body">
                <div className="col-lg-12">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={updateData.name}
                    onChange={(e) => setUpdaTEData({ ...updateData, name: e.target.value })}
                    className="form-control"
                    id="inputName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputAddress" className="form-label">
                    Address:
                  </label>
                  <textarea
                    value={updateData.address}
                    onChange={(e) =>
                      setUpdaTEData({ ...updateData, address: e.target.value })
                    }
                    className="form-control"
                    id="inputAddress"
                  ></textarea>
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputCity" className="form-label">
                    City:
                  </label>
                  <select
                    id="inputCity"
                    className="form-control"
                    value={updateData.city}
                    onChange={(e) => setUpdaTEData({ ...updateData, city: e.target.value })}
                  >
                    {cityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-12">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={updateData.phone}
                    onChange={(e) => setUpdaTEData({ ...updateData, phone: e.target.value })}
                    className="form-control"
                    id="inputPhone"
                    aria-describedby="emailHelp"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputServiceType" className="form-label">
                    Service Type:
                  </label>
                  <select
                    id="inputServiceType"
                    className="form-control"
                    value={updateData.serviceType}
                    onChange={(e) =>
                      setUpdaTEData({ ...updateData, serviceType: e.target.value })
                    }
                  >
                    {serviceTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputPrice" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    value={updateData.price}
                    onChange={(e) => setUpdaTEData({ ...updateData, price: e.target.value })}
                    className="form-control"
                    id="inputPrice"
                    required
                    placeholder="Enter price"
                  />
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputParkingSpace" className="form-label">
                    Parking Space:
                  </label>
                  <input
                    type="number"
                    value={updateData.parkingSpace}
                    onChange={(e) =>
                      setUpdaTEData({ ...updateData, parkingSpace: e.target.value })
                    }
                    className="form-control"
                    id="inputParkingSpace"
                    required
                    placeholder="Parking space"
                  />
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputDescription" className="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    value={updateData.description}
                    onChange={(e) =>
                      setUpdaTEData({ ...updateData, description: e.target.value })
                    }
                    className="form-control"
                    id="inputDescription"
                    required
                    placeholder="Description"
                  />
                </div>
                <div className="col-lg-12 inputs">
                  <label htmlFor="inputStaff" className="form-label">
                    Staff:
                  </label>
                  <select
                    id="inputStaff"
                    className="form-control"
                    value={updateData.staff}
                    onChange={(e) => setUpdaTEData({ ...updateData, staff: e.target.value })}
                  >
                    <option value="">Select Staff</option>
                    {staffOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="SubmitBtn btn btn-secondary addBtn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="SubmitBtn btn btn-primary addBtn"
                data-bs-dismiss="modal"
                onClick={updateitem}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
