import React from "react";

export const Communications = () => {
  return (
    <>
      <div className="card card-default">
        <div className="card-body">
          <div className="row mt-3">
            <div className="col-md-10 col-10">
              <div className="d-flex align-items-center ">
                <h3 className="text-uppercase">Communications</h3>
                <button className="btn btn-primary sm text-warning ms-2">
                  +
                </button>
              </div>
            </div>
            <div className="col-md-2 col-10 text-end">
              <div className="d-flex align-items-center ">
                <h6 className="me-2">Filter</h6>
                <i className="mdi mdi-wifi-star"></i>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-10">
              <table class="table">
                <thead>
                  <tr className="text-uppercase">
                    <th scope="col" className="text-upperCase">
                      type
                    </th>
                    <th scope="col" className="text-upperCase">
                      time
                    </th>
                    <th scope="col" className="text-upperCase">
                      Direction
                    </th>
                    <th scope="col" className="text-upperCase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-delete-outline font-size-20"></i>
                        <h6 className="ms-2">SMS</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-email font-size-20"></i>
                        <h6 className="ms-2">Email</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-delete-outline font-size-20"></i>
                        <h6 className="ms-2">SMS</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-phone font-size-20"></i>
                        <h6 className="ms-2">Call</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-delete-outline font-size-20"></i>
                        <h6 className="ms-2">SMS</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-email font-size-20"></i>
                        <h6 className="ms-2">Email</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-delete-outline font-size-20"></i>
                        <h6 className="ms-2">SMS</h6>
                      </div>
                    </td>
                    <td>Wed Sep 2, 2020 12:30 am</td>
                    <td>Outbound</td>
                    <td>Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


