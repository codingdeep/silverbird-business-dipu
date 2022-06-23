import React, { useState } from "react";
// import FlotingInput from '../../components/FlotingInput';
import FlotingInput from "../FlotingInput";

export const ProfileInfo = (props) => {
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
            <div className="card card-default mt-3">
                <div className="card-body">

                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="text-uppercase text-dark">Profile</h4>
                        <button className="btn btn-link text-warning">Edit</button>
                    </div>

                    <ul class="list-unstyled">
                        <li className="d-flex align-items-center mb-3">
                            <i className="mdi mdi-account-circle me-2 font-size-20"></i>
                            <span>
                                <small className="text-uppercase">name</small>
                                <br />
                                <span className="text-dark">Md: Nahid Hasan</span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center  mb-3">
                            <i className="mdi mdi-email me-2 font-size-20"></i>
                            <span>
                                <small className="text-uppercase">email address</small>

                                <br />
                                <span className="text-dark">hulk@gmail.com</span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center  mb-3">
                            <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                            <span>
                                <small className="text-uppercase">
                                    next birthday
                                </small>
                                <br />
                                <span className="text-dark">Fri Sep 17,2021 </span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center  mb-3">
                            <i className="mdi mdi-google-circles-communities me-2 font-size-20"></i>
                            <span>
                                <small className="text-uppercase">gender</small>
                                <br />
                                <span className="text-dark">Male</span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center  mb-3">
                            <i className="mdi mdi-cellphone me-2 font-size-20"></i>
                            <span>
                                <small className="text-uppercase">
                                    mobile number
                                </small>
                                <br />
                                <span className="text-dark">+8801712646739</span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center  mb-3">
                            <i className="mdi mdi-home-assistant me-2 font-size-20"></i>
                            <span>
                                <small className="text-uppercase">
                                    Referral Token
                                </small>
                                <br />
                                <span className="text-dark">IUVHO656</span>
                            </span>
                        </li>
                    </ul>
                    <div className="row my-3">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="ms-5">Transient</h6>
                                <div class="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="ms-5">Text Notifications</h6>
                                <div class="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="ms-5">Email Notifications</h6>
                                <div class="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-default mt-3">
                <div className="card-body">

                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="text-uppercase text-dark">Profile Update</h4>
                        <button className="btn btn-link text-warning">Update</button>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
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
                        <div className="col-lg-4">
                            <FlotingInput
                                type="text"
                                label="Last NAME"
                                onChange={handleOnChange}
                                id="lastName"
                                value={fields.lastName}
                                name="chesMet"
                            // parentClass=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <FlotingInput
                                type="text"
                                label="Nick Name"
                                onChange={handleOnChange}
                                id="lastName"
                                value={fields.lastName}
                                name="chesMet"
                            // parentClass=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card card-default mt-3">
                <div className="card-body">

                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="text-uppercase text-dark">Profile</h4>
                        <button className="btn btn-link text-warning">Edit</button>
                    </div>

                    <div className="row">

                    </div>
                </div>
            </div>
        </>
    );
};


