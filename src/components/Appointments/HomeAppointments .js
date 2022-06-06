import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Avatar from '../Avatar';
import avatar from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';


export default function HomeAppointments() {
    const [index, setIndex] = useState("1");


    const toggle = (newIndex) => {
        setIndex(newIndex);
    }

    console.log(index);

    return (
        <div>
            <div className="card card-default">
                <div className="card-header">
                    <h5 className='text-primary' >Appointments</h5>
                    <button className="btn btn-link text-warning">View All</button>
                </div>

                <div class="card-body">
                    <Nav className="tabs-default">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: index === "1" })}
                                onClick={() => toggle("1")}
                            >
                                Pending
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: index === "2" })}
                                onClick={() => toggle("2")}
                            >
                                Expired
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={index} className="mt-3">
                        <TabPane tabId="1">
                            {/* single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar2} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                </div>
                            </div>

                            {/* single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar3} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar3} />
                                </div>
                            </div>

                            {/* single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                </div>
                            </div>

                            {/* Single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar3} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            {/* single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                </div>
                            </div>

                            {/* single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar2} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar3} />
                                </div>
                            </div>

                            {/* single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar3} />
                                </div>
                            </div>

                            {/* Single  */}
                            <div className="row mb-3">
                                <div className="col-9">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={avatar2} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Glenn, Pax</h6>
                                            <span className='text-sm'>Oct 8, 9:00 Am</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <Avatar className='avatar-xs me-1' src={avatar3} />
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}
