import React from "react";
import Avatar from "../../components/Avatar";
import user from "../../assets/images/avatar.png";


export const CustomerDetails = () => {
  return (
    <>
      <div className="card card-default">
        <div className="row px-2">
          <div className="row mt-3">
            <div className="col-md-6 col-10">
              <h3 className="text-uppercase">Upcoming Appointments</h3>
            </div>
            <div className="col-md-6 col-10 text-end">
              <h6 className="text-warning">View all</h6>
            </div>
          </div>
        </div>
        <div className="row px-2 pt-2">
          <div className="col-md-9 col-11">
            <h6 className="text-warning">Thu, Sep 24 2020 09:00 am</h6>
            <div className="d-flex">
              <div className="d-flex">
                <i className="mdi  mdi-check "></i>
                <p className="ms-2 m-0">Confirmed</p>
              </div>
              <div className="d-flex mx-1">
                <i className="mdi  mdi-run "></i>
                <p className="ms-2 m-0">Standing</p>
              </div>
              <div className="d-flex mx-1">
                <i className="mdi  mdi-phone "></i>
                <p className="ms-2 m-0">Source</p>
              </div>
              <div className="d-flex mx-1">
                <i className="mdi  mdi-currency-usd "></i>
                <p className="ms-2 m-0">Total: $40.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-1 text-end">
            <button className="btn btn-sm mdi mdi-pencil font-size-20"></button>
          </div>
        </div>
        <div className="row px-2">
          <div className="col-md-7 col-10">
            <ul class="list-unstyled">
              <li className="d-flex align-items-center">
                <Avatar
                  src={user}
                  circle={true}
                  className="avatar-xs ms-1 me-1"
                />
                <span>
                  <span className="text-dark">Women's Haircut With Cindy</span>
                  <br />
                  <span className="d-flex">
                    <small>09:00 am 09:30 am</small>
                    <small>
                      <p className="ms-1">Created by: Alex on Tue Aug 20</p>
                    </small>
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-10">
            <div className="d-flex align-items-center justify-content-evenly">
              <div className="btn btn-primary sm">CLICK IN</div>
              <div className="btn btn-warning sm">CLICK out</div>
              <div className="btn btn-danger sm">Cancel</div>
            </div>
          </div>
        </div>
        <div className="row px-2 pt-2">
          <div className="col-md-9 col-11">
            <h6 className="text-warning">Thu, Sep 24 2020 09:00 am</h6>
            <div className="d-flex">
              <div className="d-flex">
                <i className="mdi  mdi-check "></i>
                <p className="ms-2 m-0">Confirmed</p>
              </div>
              <div className="d-flex mx-1">
                <i className="mdi  mdi-run "></i>
                <p className="ms-2 m-0">Standing</p>
              </div>
              <div className="d-flex mx-1">
                <i className="mdi  mdi-phone "></i>
                <p className="ms-2 m-0">Source</p>
              </div>
              <div className="d-flex mx-1">
                <i className="mdi  mdi-currency-usd "></i>
                <p className="ms-2 m-0">Total: $40.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-1 text-end">
            <button className="btn btn-sm mdi mdi-pencil font-size-20"></button>
          </div>
        </div>
        <div className="row px-2">
          <div className="col-md-7 col-10">
            <ul class="list-unstyled">
              <li className="d-flex align-items-center">
                <Avatar
                  src={user}
                  circle={true}
                  className="avatar-xs ms-1 me-1"
                />
                <span>
                  <span className="text-dark">Women's Haircut With Cindy</span>
                  <br />
                  <span className="d-flex">
                    <small>09:00 am 09:30 am</small>
                    <small>
                      <p className="ms-1">Created by: Alex on Tue Aug 20</p>
                    </small>
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-10">
            <div className="d-flex align-items-center justify-content-evenly">
              <div className="btn btn-primary sm">CLICK IN</div>
              <div className="btn btn-warning sm">CLICK out</div>
              <div className="btn btn-danger sm">Cancel</div>
            </div>
          </div>
        </div>

      </div>

      <div className="card card-default mt-3">
        <div className="card-body">
          <div className="row px-2 pt-2">
            <div className="col-md-9 col-11">
              <h6 className="text-warning">Thu, Sep 24 2020 09:00 am</h6>
              <div className="d-flex">
                <div className="d-flex">
                  <i className="mdi  mdi-check "></i>
                  <p className="ms-2 m-0">Confirmed</p>
                </div>
                <div className="d-flex mx-1">
                  <i className="mdi  mdi-run "></i>
                  <p className="ms-2 m-0">Standing</p>
                </div>
                <div className="d-flex mx-1">
                  <i className="mdi mdi-phone "></i>
                  <p className="ms-2 m-0">Source</p>
                </div>
                <div className="d-flex mx-1">
                  <i className="mdi  mdi-currency-usd "></i>
                  <p className="ms-2 m-0">Total: $40.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-1 text-end">
              <button className="btn btn-sm mdi mdi-pencil font-size-20"></button>
            </div>
          </div>
          <div className="row px-2">
            <div className="col-md-7 col-10">
              <ul class="list-unstyled">
                <li className="d-flex align-items-center">
                  <Avatar
                    src={user}
                    circle={true}
                    className="avatar-xs ms-1 me-1"
                  />
                  <span>
                    <span className="text-dark">Women's Haircut With Cindy</span>
                    <br />
                    <span className="d-flex">
                      <small>09:00 am 09:30 am</small>
                      <small>
                        <p className="ms-1">Created by: Alex on Tue Aug 20</p>
                      </small>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-10">
              <div className="d-flex align-items-center justify-content-evenly">
                <div className="btn btn-primary sm">CLICK IN</div>
                <div className="btn btn-warning sm">CLICK out</div>
                <div className="btn btn-danger sm">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

