import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FileUploader } from "react-drag-drop-files";

import Filter from '../../components/Filter/Filter';
import Avatar from '../../components/Avatar';
import user from '../../assets/images/avatar.png';
import FlotingInput from '../../components/FlotingInput';


export default function Services() {

    const [fields, setFields] = useState({
        chesMet: "",
        chesLeft: "",
    })

    const handleOnChange = (e) => {

        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        });

    }


    const [modal, setModal] = useState(false);
    const modalToggle = () => {
        setModal(!modal)
    }

    // Change Image
    const handleOnChangeResume = (e) => {


    }

    return (
        <>
            <Filter
                pageTitle="Services"
                handleAddNew={modalToggle}
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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
                                                <button className='btn btn-sm mdi mdi-pencil font-size-20' onClick={modalToggle}></button>
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

                <Modal isOpen={modal} size="md">
                    <ModalHeader toggle={modalToggle} tag="div" className='modal-header-default'>
                        <h6 className='text-uppercase'>Update Service</h6>
                        <div className='d-flex align-items-center justify-content-end'>
                            <button className='btn btn-primary btn-sm me-3'>Save</button>
                        </div>

                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-6">
                                <FlotingInput
                                    type="text"
                                    label="Service Name"
                                    onChange={handleOnChange}
                                    id="serviceName"
                                    value={fields.serviceName}
                                    name="serviceName"
                                // parentClass=""
                                />
                            </div>
                            <div className="col-6">
                                <FlotingInput
                                    type="select"
                                    label="Category"
                                    onChange={handleOnChange}
                                    id="category"
                                    value={fields.category}
                                    name="category"
                                    options={["Hire Cut", "Women Cut", "Nail Cut"]}
                                />
                            </div>
                            <div className="col-7">
                                <FileUploader
                                    multiple={false}
                                    handleChange={handleOnChangeResume}
                                    name="resume"
                                    types={["jpg", "png", "JPEG"]}
                                    classes="input-drage-drop"
                                />
                            </div>
                            <div className="col-5">
                                <FlotingInput
                                    type="text"
                                    label="Duration"
                                    onChange={handleOnChange}
                                    id="duration"
                                    value={fields.Duration}
                                    name="duration"
                                // parentClass=""
                                />
                            </div>

                            <div className="col-4">
                                <FlotingInput
                                    type="select"
                                    label="Price Type"
                                    onChange={handleOnChange}
                                    id="priceType"
                                    value={fields.priceType}
                                    name="priceType"
                                    options={["Price Range", "Price Range 2", "Price 3"]}
                                />
                            </div>
                            <div className="col-4">
                                <FlotingInput
                                    type="text"
                                    label="Min. Price"
                                    onChange={handleOnChange}
                                    id="minPrice"
                                    value={fields.minPrice}
                                    name="minPrice"
                                // parentClass=""
                                />
                            </div>
                            <div className="col-4">
                                <FlotingInput
                                    type="text"
                                    label="Max. Price"
                                    onChange={handleOnChange}
                                    id="maxPrice"
                                    value={fields.maxPrice}
                                    name="maxPrice"
                                // parentClass=""
                                />
                            </div>
                            <div className="col-6">
                                <FlotingInput
                                    rows="4"
                                    type="textarea"
                                    label="Max. Price"
                                    onChange={handleOnChange}
                                    id="maxPrice"
                                    value={fields.maxPrice}
                                    name="maxPrice"
                                // parentClass=""
                                />
                            </div>
                            <div className="col-6">
                                <div class="form-check form-switch form-switch-custom">
                                    <label class="form-check-label" for="Consent">Consent Forms</label>
                                    <input class="form-check-input" type="checkbox" role="switch" id="Consent" />
                                </div>
                                <div class="form-check form-switch form-switch-custom">
                                    <label class="form-check-label" for="Active">Active</label>
                                    <input class="form-check-input" type="checkbox" role="switch" id="Active" />
                                </div>
                                <div class="form-check form-switch form-switch-custom">
                                    <label class="form-check-label" for="Visible">Visible</label>
                                    <input class="form-check-input" type="checkbox" role="switch" id="Visible" />
                                </div>
                            </div>


                        </div>
                    </ModalBody>

                </Modal>



            </div>
        </>
    )
}
