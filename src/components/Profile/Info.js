import React from "react";
// import Avatar from "../../components/Avatar";
// import user from "../../assets/images/avatar.png";
export const Info = () => {
  return (
    <>
      <div className="card card-default">
        <div className="row p-2">
          <div className="d-flex align-content-center justify-content-between">
            <h3 className="text-uppercase">Update profile</h3>
            <h6 className="text-warning">Update</h6>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-lg-4">
            <div className="card-default min-card">
              <span className="text-uppercase">First Name</span>
              <h5 className="text-dark"> Hulk</h5>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-default min-card">
              <span className="text-uppercase">last Name</span>
              <h5 className="text-dark"> Nahid</h5>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-default min-card">
              <span className="text-uppercase">Nick Name</span>
              <h5 className="text-dark"> Hasan</h5>
            </div>
          </div>
          <div className="col-lg-4 g-3">
            <div className="card-default min-card">
              <span className="text-uppercase">email</span>
              <h5 className="text-dark">hulk@gmail.com</h5>
            </div>
          </div>
          <div className="col-lg-4 g-3">
            <div className="card-default min-card">
              <span className="text-uppercase">Mobile Number</span>
              <h5 className="text-dark"> +8801712646739</h5>
            </div>
          </div>
          <div className="col-lg-4 g-3">
            <div
              style={{
                border: "2px solid gray",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              <h6 className="m-0">Gender</h6>
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Male</p>
                <select style={{ border: "none" }}>
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-4 g-3">
            <div className="card-default min-card">
              <span className="text-uppercase">Birthday</span>
              <div className="d-flex align-content-center justify-content-between">
                <h5 className="text-dark"> Jan 01 1990</h5>
                <i className="mdi mdi-calendar me-2 font-size-20"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 g-3">
            <div
              style={{
                border: "2px solid gray",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              <h6 className="m-0">Referral Token</h6>
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">IUVHO656</p>
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
    </>
  );
};

export default Info;
