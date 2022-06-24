
import React, { Component } from "react";
import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar";
import user from "../../assets/images/avatar.png";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
} from "reactstrap";

import classnames from "classnames";

import { Visit, Formulas, Info, PendingForms, Reward, ProfileInfo, Communications } from "../../components/Profile";


export class CustomersDetailsInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: "1",
        };
    }

    toggle = (index) => {
        console.log(index);
        this.setState({
            index: index
        });
    };

    render() {
        const { index } = this.state;
        return (
            <>
                <Filter
                    pageTitle="Customers Details"
                    search={false}
                    select={false}
                    searchBtn={false}
                    serviceSelect={false}
                    clear={false}
                    addNew={false}
                    pasignation={false}
                />
                <div>
                    <div className="row mt-3">
                        {/* Sinlge  Item */}
                        <div className="col-xl-4">
                            <div className="card card-default mb-3">
                                <div className="card-body">
                                    <div className="d-flex mb-2 align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <Avatar
                                                src={user}
                                                circle={true}
                                                className="avatar-xl rounded"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="text-dark mb-0">Anna E. Johnson</h5>
                                            <span>(301) 351-7872</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-10">
                                            <ul class="list-unstyled">
                                                <li className="d-flex align-items-center mb-1">
                                                    <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                    <span className="line-height-1 mb-1">
                                                        <small className="text-uppercase mb-0 text-sm">
                                                            next birthday
                                                        </small>
                                                        <br />
                                                        <span className="text-small text-dark font-weight-bold">Fri Sep 17,2021</span>
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center mb-1">
                                                    <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                    <span className="line-height-1 mb-1">
                                                        <small className="text-uppercase">
                                                            joining date
                                                        </small>
                                                        <br />
                                                        <span className="text-dark">
                                                            Sat, May 11 2019 01:46 am
                                                        </span>
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center mb-1">
                                                    <i className="mdi mdi-email me-2 font-size-20"></i>
                                                    <span className="line-height-1 mb-1">
                                                        <small className="text-uppercase">
                                                            email address
                                                        </small>
                                                        <br />
                                                        <span className="text-dark">hulk@gmail.com</span>
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center mb-1">
                                                    <i className="mdi mdi-clipboard-check-outline me-2 font-size-20"></i>
                                                    <span className="line-height-1 mb-1">
                                                        <small className="text-uppercase">last visit</small>
                                                        <br />
                                                        <span className="text-dark">2 Hrs Ago</span>
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center mb-1">
                                                    <i className="mdi mdi-google-circles-communities me-2 font-size-20"></i>
                                                    <span className="line-height-1 mb-1">
                                                        <small className="text-uppercase">
                                                            Referred by
                                                        </small>
                                                        <br />
                                                        <span className="text-dark">Seyi Badmus</span>
                                                    </span>
                                                </li>
                                                <hr />
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="mdi mdi-check me-2 text-success fw-bold"></i>
                                                    <span className="text-capitalize">
                                                        required password change
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="mdi mdi-check me-2 text-success fw-bold"></i>
                                                    <span className="text-capitalize">
                                                        can book online
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="mdi mdi-check me-2 text-success fw-bold"></i>
                                                    <span className="text-capitalize">
                                                        pending consent forms
                                                    </span>
                                                </li>
                                                <hr />
                                                <li className="d-flex align-items-center justify-content-between mb-2">
                                                    <span className="text-capitalize text-black">
                                                        reward balance
                                                    </span>
                                                    <span className="text-warning h5">
                                                        6.65
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between mb-2">
                                                    <span className="text-capitalize text-black">
                                                        referral token
                                                    </span>
                                                    <span className="text-warning h5">
                                                        IUVHO656
                                                    </span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between mb-2">
                                                    <span className="text-capitalize text-black">
                                                        referral earnings
                                                    </span>
                                                    <span className="text-warning h5">
                                                        20.00
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card card-default mb-3">
                                <div className="card-body">
                                    <Nav className="tabs-default tabs-style-1">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "1" })}
                                                onClick={() => this.toggle("1")}
                                            >
                                                Info
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "2" })}
                                                onClick={() => this.toggle("2")}
                                            >
                                                Visits
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "3" })}
                                                onClick={() => this.toggle("3")}
                                            >
                                                Rewards
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "4" })}
                                                onClick={() => this.toggle("4")}
                                            >
                                                Forms
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "5" })}
                                                onClick={() => this.toggle("5")}
                                            >
                                                Formulas
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "6" })}
                                                onClick={() => this.toggle("6")}
                                            >
                                                Wait Lists
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: index === "7" })}
                                                onClick={() => this.toggle("7")}
                                            >
                                                Communications
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>

                            <TabContent activeTab={index} className="mt-2">
                                {/* Profile  */}
                                <TabPane tabId="1">
                                    {/* <Info /> */}
                                    <ProfileInfo />
                                </TabPane>

                                <TabPane tabId="2">
                                    <Visit />
                                </TabPane>

                                <TabPane tabId="3">
                                    <Reward />
                                </TabPane>
                                <TabPane tabId="4">
                                    <PendingForms />
                                </TabPane>
                                <TabPane tabId="5">
                                    <Formulas />
                                </TabPane>
                                <TabPane tabId="7">
                                    <Communications />
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CustomersDetailsInfo;
