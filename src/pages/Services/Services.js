import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import Filter from '../../components/Filter/Filter';
import Avatar from '../../components/Avatar';
import user from '../../assets/images/avatar.png';

export default function Services() {

    const [modal, setModal] = useState(false);
    const modalToggle = () => {
        setModal(!modal)
    }

    return (
        <>
            <Filter
                pageTitle="Services"
            />
            <div>
                <div className="row mt-3">
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />
                                        <Avatar src={user} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <Avatar src={user} circle={true} className="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <div>
                                                <h6 className='text-dark text-uppercase mb-0'>Anna E. Johnson</h6>
                                                <span>30 min</span>
                                            </div>
                                            <div>
                                                <i className="mdi mdi-pencil font-size-20"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <ul class="list-unstyled">
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-currency-usd me-2 font-size-20"></i>
                                            <span className='text-dark'>09 10th, 2020</span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <i className="mdi mdi-billiards-rack me-2 font-size-20"></i>
                                            <span className='text-dark'>Category - Hair Cut</span>
                                        </li>
                                    </ul>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />
                                        <Avatar src={user} circle={true} className="avatar-xs ms-1" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Modal
                    isOpen={modal}
                    size="lg"
                >
                    <ModalHeader toggle={modalToggle} tag="div" className='modal-header-default'>
                        <h6 className='text-uppercase'>nEW cLOSE oUT</h6>
                        <div className='d-flex align-items-center justify-content-end'>
                            <button className='btn btn-secondary btn-sm me-3'>FINALIZE</button>
                            <button className='btn btn-warning btn-sm me-3'>UNRESOLVE</button>
                            <button className='btn btn-primary btn-sm me-3'>Save</button>
                            <button className='btn mdi mdi-delete-outline btn-sm' style={{ fontSize: '20px' }}></button>
                        </div>

                    </ModalHeader>
                    <ModalBody>
                        <div className="row">

                        </div>
                    </ModalBody>

                </Modal>



            </div>
        </>
    )
}
