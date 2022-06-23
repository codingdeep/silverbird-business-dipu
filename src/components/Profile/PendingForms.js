import React from "react";

export const PendingForms = () => {
  return (
    <>
      <div className="card card-default">
        <div className="card-body">
          <div className="row px-2">
            <div className="row mt-3">
              <div className="col-md-6 col-10">
                <h3 className="text-uppercase">Pending Forms</h3>
              </div>
              <div className="col-md-6 col-10">
                <h6 className="text-end text-warning">View All</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-eye"></i>
                <h6 className="ms-2">Eyelash Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <button className="btn btn-sm mdi mdi-pencil font-size-20 text-end"></button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-face-woman-profile"></i>
                <h6 className="ms-2">Facial Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <button className="btn btn-sm mdi mdi-pencil font-size-20 text-end"></button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-eye"></i>
                <h6 className="ms-2">Eyelash Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <button className="btn btn-sm mdi mdi-pencil font-size-20 text-end"></button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-face-woman"></i>
                <h6 className="ms-2">Facial Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <button className="btn btn-sm mdi mdi-pencil font-size-20 text-end"></button>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-default mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-10">
              <h3 className="text-uppercase">Completed Forms</h3>
            </div>
            <div className="col-md-6 col-10">
              <h6 className="text-end text-warning">View All</h6>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-eye"></i>
                <h6 className="ms-2">Eyelash Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <div className="d-flex align-items-center justify-content-between">
                <i className="mdi mdi-eye"></i>
                <i className="mdi mdi-delete-outline"></i>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-eye"></i>
                <h6 className="ms-2">Eyelash Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <div className="d-flex align-items-center justify-content-between">
                <i className="mdi mdi-eye"></i>
                <i className="mdi mdi-delete-outline"></i>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-11 col-10">
              <div className="d-flex align-items-center">
                <i className="mdi mdi-eye"></i>
                <h6 className="ms-2">Eyelash Consent Form</h6>
              </div>
            </div>
            <div className="col-md-1 col-2">
              <div className="d-flex align-items-center justify-content-between">
                <i className="mdi mdi-eye"></i>
                <i className="mdi mdi-delete-outline"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


