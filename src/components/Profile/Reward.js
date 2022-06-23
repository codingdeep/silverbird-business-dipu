import React from "react";

export const Reward = () => {
  return (
    <>
      <div className="card card-default">
        <div className="card-body">
          <div className="row px-2">
            <div className="row mt-3">
              <div className="col-md-6 col-10">
                <h3 className="text-uppercase">rewards</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <table class="table">
                <thead>
                  <tr className="text-uppercase">
                    <th scope="col">date</th>
                    <th scope="col">amount</th>
                    <th scope="col">type</th>
                    <th scope="col">note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Wed Sep 2, 2022</th>
                    <td>$1.99</td>
                    <td>Compersation</td>
                    <td>03:12 am, Sun, October 18th, 2022</td>
                  </tr>
                  <tr>
                    <th>Wed Sep 2, 2022</th>
                    <td>$1.99</td>
                    <td>Spend-Limit</td>
                    <td>
                      <small>Who is listening this track during 😂😂😂</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Wed Sep 2, 2022</th>
                    <td>$1.99</td>
                    <td>Spend-Limit</td>
                    <td>
                      <small>Who is listening this track during 😂😂😂</small>
                    </td>
                  </tr>
                  <tr>
                    <th>Wed Sep 2, 2022</th>
                    <td>$1.99</td>
                    <td>Spend-Limit</td>
                    <td>
                      <small>Who is listening this track during 😂😂😂</small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-default mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-10">
              <h3 className="text-uppercase">adjust reward</h3>
            </div>
            <div className="col-md-6 col-10">
              <h6 className="text-end text-warning">Update</h6>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4 col-10">
              <div
                style={{
                  border: "2px solid gray",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <h6 className="m-0">Adjust Reward</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">Input</p>
                  <select style={{ border: "none" }}>
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10">
              <div
                style={{
                  border: "2px solid gray",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <h6 className="m-0">Adjust Reward</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">Input</p>
                  <select style={{ border: "none" }}>
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10">
              <div
                style={{
                  border: "2px solid gray",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <h6 className="m-0">Adjust Reward</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">Input</p>
                  <select style={{ border: "none" }}>
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


