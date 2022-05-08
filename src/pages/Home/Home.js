import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import HomeStatus from '../../components/Cards/HomeStatus';
import avatar from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar2.png';

import HomeAppointments from '../../components/Appointments/HomeAppointments ';
import Avatar from '../../components/Avatar';
import HomeProducts from '../../components/Products/HomeProducts';




export default function Home() {
    return (
        <div>
            {/* Top Filter Area  */}
            <div className="row justify-content-between mb-3">
                <div className="col-md-4">
                    <div className='bg-white rounded px-5 py-2'>
                        <Nav className="default justify-content-between" >
                            <NavItem>
                                <NavLink href="#">
                                    Today
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" active>
                                    This Week
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    This Month
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    90 Days
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <div className='d-flex align-items-center'>
                        <span className='text-warning me-3'>Bookings</span>
                        <div class="form-check form-switch d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label ms-2 text-dark font-weight-medium" for="flexSwitchCheckDefault">Check-Outs</label>
                        </div>

                    </div>
                </div>

            </div>
            {/* Home Status */}
            <HomeStatus />

            <div className='mb-3'>
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card card-default">
                            <div class="card-header">
                                <h5 className='text-primary' >Today's Appointments </h5>
                                <span style={{ cursor: 'pointer' }}>
                                    <i className='mdi mdi-fullscreen' style={{ fontSize: '22px' }}></i>
                                </span>
                            </div>

                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-default mb-0">
                                        <thead class="light">
                                            <tr>
                                                <td>Name</td>
                                                <td>Time</td>
                                                <td>Appreciation</td>
                                                <td>Status</td>
                                                <td>Technician</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <i className="mdi mdi-account-multiple text-success me-1"></i>
                                                    <span>Fastrack Watchies</span>
                                                </td>
                                                <td>09:00 Am</td>
                                                <td>Valued Customer</td>
                                                <td>
                                                    <span className='status success' >Confirmed</span>
                                                </td>
                                                <td>
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="mdi mdi-account-supervisor-circle text-warning me-1"></i>
                                                    <span>Fastrack Watchies</span>
                                                </td>
                                                <td>09:00 Am</td>
                                                <td>Valued Customer</td>
                                                <td>
                                                    <span className='status primary' >Check Out</span>
                                                </td>
                                                <td>
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="mdi mdi-walk text-info me-1"></i>
                                                    <span>Fastrack Watchies</span>
                                                </td>
                                                <td>09:00 Am</td>
                                                <td>Valued Customer</td>
                                                <td>
                                                    <span className='status danger' >Confirmed</span>
                                                </td>
                                                <td>
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="mdi mdi-phone text-primary me-1"></i>
                                                    <span>Fastrack Watchies</span>
                                                </td>
                                                <td>09:00 Am</td>
                                                <td>Valued Customer</td>
                                                <td>
                                                    <span className='status success' >Confirmed</span>
                                                </td>
                                                <td>
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="mdi mdi-cellphone-settings text-danger me-1"></i>
                                                    <span>Fastrack Watchies</span>
                                                </td>
                                                <td>09:00 Am</td>
                                                <td>Valued Customer</td>
                                                <td>
                                                    <span className='status primary' >Check Out</span>
                                                </td>
                                                <td>
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="mdi mdi-account text-success me-1"></i>
                                                    <span>Fastrack Watchies</span>
                                                </td>
                                                <td>09:00 Am</td>
                                                <td>Valued Customer</td>
                                                <td>
                                                    <span className='status danger' >Confirmed</span>
                                                </td>
                                                <td>
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                    <Avatar className='avatar-xs me-1' src={avatar2} />
                                                    <Avatar className='avatar-xs me-1' src={avatar} />
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4">
                        <HomeAppointments />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-xl-4">
                        <HomeProducts />
                    </div>
                    <div className="col-xl-4">
                        <div className="card card-default">
                            <div className="card-header">
                                <h5 className='text-primary' >Recent Sale</h5>
                                <button className="btn btn-warning btn-sm">New</button>
                            </div>
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className='text-uppercase text-dark'>Cash Net: $200.00</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className='text-uppercase text-dark'>Cash Left: $150.00</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className='mb-1'>Services:</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='mb-1'>$1200.00</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className='mb-1'>Products:</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='mb-1'>$1200.00</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className='mb-1'>Tip:</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className='mb-1'>$1200.00</p>
                                    </div>
                                </div>

                                <div className="row mt-7 pt-3">
                                    <div className="col">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <div className="icon bg-primary icon-sm rounded-circle">
                                                    <i className="mdi mdi-currency-usd text-white"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <span className='d-block'>Cash</span>
                                                <span className='d-block text-primary'>$2850.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <div className="icon bg-primary icon-sm rounded-circle">
                                                    <i className="mdi mdi-gift-outline text-white"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <span className='d-block'>Gift Card</span>
                                                <span className='d-block text-primary'>$2850.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <div className="icon bg-primary icon-sm rounded-circle">
                                                    <i className="mdi mdi-checkbook text-white"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <span className='d-block'>Check</span>
                                                <span className='d-block text-primary'>$2850.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <div className="icon bg-primary icon-sm rounded-circle">
                                                    <i className="mdi mdi-credit-card-outline text-white"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <span className='d-block'>Credit</span>
                                                <span className='d-block text-primary'>$2850.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <div className="icon bg-primary icon-sm rounded-circle">
                                                    <i className="mdi mdi-trophy-outline text-white"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <span className='d-block'>Reward</span>
                                                <span className='d-block text-primary'>$2850.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="flex-shrink-0">
                                                <div className="icon bg-primary icon-sm rounded-circle">
                                                    <i className="mdi mdi-home-outline text-white"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <span className='d-block'>Total</span>
                                                <span className='d-block text-primary'>$2850.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
