import React from "react";

export const Communications = () => {
  return (
    <>
      <div className="card card-default">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center mb-3">
              <h4 className="text-uppercase text-dark mb-0">Pending Forms </h4>
              <button className="btn btn-sm">
                <span className="icon custom mdi mdi-plus font-size-20 bg-primary text-warning" style={{ borderRadius: "5px" }}></span>
              </button>

            </div>
            <div>
              <div className="d-flex align-items-center ">
                <h6 className="me-2">Filter</h6>
                <i className="mdi mdi-wifi-star"></i>
              </div>
            </div>

          </div>

          <div class="table-responsive">
            <table class="table table-default">
              <thead>
                <tr>
                  <td className='text-uppercase'>type</td>
                  <td className='text-uppercase'>time</td>
                  <td className='text-uppercase'>Direction</td>
                  <td className='text-uppercase'>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-message-outline'></i>
                      </div>
                      <span className="ms-2">SMS</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-email-outline'></i>
                      </div>
                      <span className="ms-2">Email</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-phone-outline'></i>
                      </div>
                      <span className="ms-2">Email</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>
                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-message-outline'></i>
                      </div>
                      <span className="ms-2">SMS</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-email-outline'></i>
                      </div>
                      <span className="ms-2">Email</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-phone-outline'></i>
                      </div>
                      <span className="ms-2">Email</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>
                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-message-outline'></i>
                      </div>
                      <span className="ms-2">SMS</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-email-outline'></i>
                      </div>
                      <span className="ms-2">Email</span>
                    </div>
                  </td>
                  <td>Wed Sep 2, 2020 12:30 am</td>
                  <td>Outbound</td>
                  <td>Completed</td>
                </tr>

                <tr >
                  <td style={{ width: "50px" }}>
                    <div className="d-flex align-items-start">
                      <div className="icon icon-sm rounded-circle bg-light">
                        <i className='mdi mdi-phone-outline'></i>
                      </div>
                      <span className="ms-2">Email</span>
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
    </>
  );
};


