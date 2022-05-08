import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Avatar from '../Avatar';

import product1 from '../../assets/images/products/product-1.jpg';
import product2 from '../../assets/images/products/product-2.jpg';
import product3 from '../../assets/images/products/product-2.jpg';

import avatar from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';


export default function HomeProducts() {
    const [index, setIndex] = useState("1");

    const toggle = (newIndex) => {
        setIndex(newIndex);
    }

    return (
        <div>
            <div className="card card-default">
                <div className="card-header">
                    <h5 className='text-primary' >Recent Sale</h5>
                    <button className="btn btn-link text-warning">View All</button>
                </div>

                <div class="card-body">
                    <Nav className="tabs-default">
                        <NavItem>
                            <NavLink className={classnames({ active: index === "1" })} onClick={() => toggle("1")}>
                                Pending
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: index === "2" })} onClick={() => toggle("2")} >
                                Inventory
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={index} className="mt-6">
                        <TabPane tabId="1">
                            {/* single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product1} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Kevin Murphy</h6>
                                            <span>Doo Over</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$15.00</span>
                                    <span className='bg-success-opacity px-4 py-1 rounded' >7</span>
                                </div>
                            </div>

                            {/* single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product2} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Aveda</h6>
                                            <span>Behold</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$13.00</span>
                                    <span className='bg-warning-opacity px-4 py-1 rounded' >-5</span>
                                </div>
                            </div>

                            {/* single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product3} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Aveda</h6>
                                            <span>Renew</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$17.00</span>
                                    <span className='bg-danger-opacity px-4 py-1 rounded' >-5</span>
                                </div>
                            </div>

                            {/* Single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex aling-items-center">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product1} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Kevin Murphy</h6>
                                            <span>Thick.Again</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$15.00</span>
                                    <span className='bg-success-opacity px-4 py-1 rounded' >9</span>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            {/* single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product2} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Aveda</h6>
                                            <span>Behold</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$13.00</span>
                                    <span className='bg-warning-opacity px-4 py-1 rounded' >-5</span>
                                </div>
                            </div>
                            {/* single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product1} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Kevin Murphy</h6>
                                            <span>Doo Over</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$15.00</span>
                                    <span className='bg-success-opacity px-4 py-1 rounded' >7</span>
                                </div>
                            </div>


                            {/* Single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex aling-items-center">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product1} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Kevin Murphy</h6>
                                            <span>Thick.Again</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$15.00</span>
                                    <span className='bg-success-opacity px-4 py-1 rounded' >9</span>
                                </div>
                            </div>
                            {/* single  */}
                            <div className="row mb-3 aling-items-center">
                                <div className="col-md-8">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <Avatar className='me-1' src={product3} rounded={true} />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 className="text-dark mb-0">Aveda</h6>
                                            <span>Renew</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <span className='text-dark me-2'>$17.00</span>
                                    <span className='bg-danger-opacity px-4 py-1 rounded' >-5</span>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}
