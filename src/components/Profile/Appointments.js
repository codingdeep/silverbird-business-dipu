import React from "react";
import Avatar from "../Avatar";
import user from "../../assets/images/avatar.png";


export const Visit = () => {
  return (
    <>
      <div className="card card-default mt-3 card-visit">
        <div className="card-header pb-0">
          <h4 className="text-uppercase text-dark">Upcoming Appointments </h4>
          <button className="btn btn-link text-warning p-0">Edit</button>
        </div>
        <div className="card-body pt-0">
          {/* Single Item  */}
          <div className="single-item">
            <div className="item-header">
              <p className="text-warning mb-0">adfdafdsf</p>
              <button className="btn btn-link p-0">
                <i className="mdi mdi-pencil font-size-20"></i>
              </button>
            </div>
            <div className="row py-2">
              <div className="col-md-2">
                <i className="mdi mdi-check "></i>
                <span className="ms-2 m-0">Confirmed</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-run "></i>
                <span className="ms-2 m-0">Standing</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-phone "></i>
                <span className="ms-2 m-0">Source</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-currency-usd "></i>
                <span className="ms-2 m-0">Total: $40.00</span>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-8">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <Avatar
                      src={user}
                      circle={true}
                      className="avatar-xs ms-1 me-1"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p className="text-dark mb-0">Women's Haircut With Cindy</p>
                    <div className="d-flex">
                      <span className="me-2">09:00 am 09:30 am</span>
                      <i className="mdi mdi-circle-medium px-3"></i>
                      <span className="ms-1">Created by: Alex on Tue Aug 20</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm me-3">CLICK IN</button>
                  <button className="btn btn-warning btn-sm me-3">CLICK out</button>
                  <button className="btn btn-danger btn-sm me-3">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          {/* Single Item  */}
          <div className="single-item">
            <div className="item-header">
              <p className="text-warning mb-0">adfdafdsf</p>
              <button className="btn btn-link p-0">
                <i className="mdi mdi-pencil font-size-20"></i>
              </button>
            </div>
            <div className="row py-2">
              <div className="col-md-2">
                <i className="mdi mdi-check "></i>
                <span className="ms-2 m-0">Confirmed</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-run "></i>
                <span className="ms-2 m-0">Standing</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-phone "></i>
                <span className="ms-2 m-0">Source</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-currency-usd "></i>
                <span className="ms-2 m-0">Total: $40.00</span>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-8">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <Avatar
                      src={user}
                      circle={true}
                      className="avatar-xs ms-1 me-1"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p className="text-dark mb-0">Women's Haircut With Cindy</p>
                    <div className="d-flex">
                      <span className="me-2">09:00 am 09:30 am</span>
                      <i className="mdi mdi-circle-medium px-3"></i>
                      <span className="ms-1">Created by: Alex on Tue Aug 20</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm me-3">CLICK IN</button>
                  <button className="btn btn-warning btn-sm me-3">CLICK out</button>
                  <button className="btn btn-danger btn-sm me-3">Cancel</button>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>


      <div className="card card-default mt-3 card-visit">
        <div className="card-header pb-0">
          <h4 className="text-uppercase text-dark">Past Appointments</h4>
          <button className="btn btn-link text-warning p-0">Edit</button>
        </div>
        <div className="card-body pt-0">
          {/* Single Item  */}
          <div className="single-item">
            <div className="item-header">
              <p className="text-warning mb-0">adfdafdsf</p>
              <button className="btn btn-link p-0">
                <i className="mdi mdi-pencil font-size-20"></i>
              </button>
            </div>
            <div className="row py-2">
              <div className="col-md-2">
                <i className="mdi mdi-check "></i>
                <span className="ms-2 m-0">Confirmed</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-run "></i>
                <span className="ms-2 m-0">Standing</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-phone "></i>
                <span className="ms-2 m-0">Source</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-currency-usd "></i>
                <span className="ms-2 m-0">Total: $40.00</span>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-8">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <Avatar
                      src={user}
                      circle={true}
                      className="avatar-xs ms-1 me-1"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p className="text-dark mb-0">Women's Haircut With Cindy</p>
                    <div className="d-flex">
                      <span className="me-2">09:00 am 09:30 am</span>
                      <i className="mdi mdi-circle-medium px-3"></i>
                      <span className="ms-1">Created by: Alex on Tue Aug 20</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm me-3">CLICK IN</button>
                  <button className="btn btn-warning btn-sm me-3">CLICK out</button>
                  <button className="btn btn-danger btn-sm me-3">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          {/* Single Item  */}
          <div className="single-item">
            <div className="item-header">
              <p className="text-warning mb-0">adfdafdsf</p>
              <button className="btn btn-link p-0">
                <i className="mdi mdi-pencil font-size-20"></i>
              </button>
            </div>
            <div className="row py-2">
              <div className="col-md-2">
                <i className="mdi mdi-check "></i>
                <span className="ms-2 m-0">Confirmed</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-run "></i>
                <span className="ms-2 m-0">Standing</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-phone "></i>
                <span className="ms-2 m-0">Source</span>
              </div>
              <div className="col-md-2">
                <i className="mdi  mdi-currency-usd "></i>
                <span className="ms-2 m-0">Total: $40.00</span>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-8">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <Avatar
                      src={user}
                      circle={true}
                      className="avatar-xs ms-1 me-1"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p className="text-dark mb-0">Women's Haircut With Cindy</p>
                    <div className="d-flex">
                      <span className="me-2">09:00 am 09:30 am</span>
                      <i className="mdi mdi-circle-medium px-3"></i>
                      <span className="ms-1">Created by: Alex on Tue Aug 20</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm me-3">CLICK IN</button>
                  <button className="btn btn-warning btn-sm me-3">CLICK out</button>
                  <button className="btn btn-danger btn-sm me-3">Cancel</button>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

