import React, { useState } from "react";
import FlotingInput from "../FlotingInput";


export const Reward = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    phone: "",
    gender: ""
  })

  const handleOnChange = (e) => {

    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });

  }
  return (
    <>
      <div className="card card-default">
        <div className="card-body">

          <div className="d-flex align-items-center justify-content-between">
            <h4 className="text-uppercase text-dark">Rewards</h4>
          </div>

          <div className="table-responsive">
            <table class="table table-default">
              <thead>
                <tr>
                  <td className='text-uppercase'>date</td>
                  <td className='text-uppercase'>amount</td>
                  <td className='text-uppercase'>type</td>
                  <td className='text-uppercase'>note</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wed Sep 2, 2022</td>
                  <td>$1.99</td>
                  <td>Compersation</td>
                  <td>03:12 am, Sun, October 18th, 2022</td>
                </tr>
                <tr>
                  <td>Wed Sep 2, 2022</td>
                  <td>$1.99</td>
                  <td>Spend-Limit</td>
                  <td>
                    Who is listening this track during 😂😂😂
                  </td>
                </tr>
                <tr>
                  <td>Wed Sep 2, 2022</td>
                  <td>$1.99</td>
                  <td>Spend-Limit</td>
                  <td>
                    Who is listening this track during 😂😂😂
                  </td>
                </tr>
                <tr>
                  <td>Wed Sep 2, 2022</td>
                  <td>$1.99</td>
                  <td>Spend-Limit</td>
                  <td>
                    Who is listening this track during 😂😂😂
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card card-default mt-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="text-uppercase text-dark">Adjust Reward</h4>
            <button className="btn btn-link text-warning">Edit</button>
          </div>
          <div className="row mt-2">
            <div className="col-md-4 col-10">
              <FlotingInput
                type="select"
                label="Price Type"
                onChange={handleOnChange}
                id="priceType"
                value={fields.priceType}
                name="priceType"
                options={["Price Range", "Price Range 2", "Price 3"]}
              />
            </div>
            <div className="col-md-4 col-10">
              <FlotingInput
                type="text"
                label="FIRST NAME"
                onChange={handleOnChange}
                id="first"
                value={fields.firstName}
                name="chesMet"
              // parentClass=""
              />
            </div>
            <div className="col-md-4 col-10">
              <FlotingInput
                type="text"
                label="FIRST NAME"
                onChange={handleOnChange}
                id="first"
                value={fields.firstName}
                name="chesMet"
              // parentClass=""
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};


