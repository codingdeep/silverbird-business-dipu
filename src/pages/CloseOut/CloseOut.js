import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

import closeOutData from './data';
import FlotingInput from '../../components/FlotingInput';

export default function Payroll() {

    const [startDate, setStartDate] = useState(
        new Date()
    );

    const [endDate, setEndDate] = useState(null);
    const [modal, setModal] = useState(false);

    const [fields, setFields] = useState({
        chesMet: "",
        chesLeft: "",
    })

    const modalToggle = () => {
        setModal(!modal)
    }

    const handleOnChange = (e) => {
        // console.log(e);
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        })

    }



    return (
        <>
            <div className='bg-white rounded p-5 shadow-sm'>
                <div className='row align-items-center'>
                    <div className="col-xl-8">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <h5 className='text-uppercase text-dark mb-0'>Close Out</h5>
                            </div>
                            <div className="col-lg-3">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="From Date"
                                    className="form-control form-control-sm"
                                />
                            </div>
                            <div className="col-lg-3">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="To Date"
                                    className="form-control form-control-sm"
                                />
                            </div>
                            <div className="col-lg-3">
                                <button className='btn btn-warning text-white btn-sm'>Apply</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-4">
                        <div className="d-flex justify-content-end">
                            <button className='btn btn-white btn-sm ms-2'>Clear Filter</button>
                            <button className='btn btn-white btn-sm ms-2' onClick={modalToggle}>
                                <i className="mdi mdi-account-plus-outline me-2"></i>
                                Add New
                            </button>
                            <div className='ms-2'>
                                <button className='btn btn-white btn-sm ms-2'>
                                    <i className="mdi mdi-chevron-left"></i>
                                </button>
                                <button className='btn btn-white btn-sm ms-2'>
                                    <i className="mdi mdi-chevron-right"></i>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className='card card-default my-3'>
                <div class="card-header d-flex flex-nowrap">
                    <h5 className='text-dark text-uppercase'>New</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-default">
                            <thead>
                                <tr>
                                    <td className='text-uppercase'>PERIOD</td>
                                    <td className='text-uppercase'>time</td>
                                    <td className='text-uppercase'>income</td>
                                    <td className='text-uppercase'>payment</td>
                                    <td className='text-uppercase'>cash met</td>
                                    <td className='text-uppercase'>cash left</td>
                                    <td className='text-uppercase'>in register</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    closeOutData.map(e => {
                                        return (
                                            <tr key={e.id}>
                                                <td>{e.startDate} - {e.endDate}</td>
                                                <td>{e.startTime} - {e.endDate} </td>
                                                <td>${e.income}</td>
                                                <td>${e.payment}</td>
                                                <td>${e.cashMet}</td>
                                                <td>${e.cashLeft}</td>
                                                <td>${e.register}</td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
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
                            <div className="col-xl-4">
                                <div className="input-wrapper-datepicker mb-3">
                                    <label for="start-time" class="form-label">Start Time</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-wrapper-datepicker mb-3">
                                    <label for="start-time" class="form-label">End Time</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                    />
                                </div>

                                <FlotingInput
                                    type="number"
                                    label="Chase Met"
                                    onChange={handleOnChange}
                                    id="chesMet"
                                    value={fields.chesMet}
                                    name="chesMet"
                                // parentClass=""
                                />

                                <FlotingInput
                                    type="number"
                                    label="Cash Left"
                                    onChange={handleOnChange}
                                    id="chesLeft"
                                    value={fields.chesLeft}
                                    name="chesLeft"
                                />

                            </div>
                            <div className="col-xl-4">
                                <FlotingInput
                                    type="number"
                                    label="Services"
                                    onChange={handleOnChange}
                                    id="services"
                                    value={fields.chesLeft}
                                    name="services"
                                />
                                <FlotingInput
                                    type="number"
                                    label="Products"
                                    onChange={handleOnChange}
                                    id="products"
                                    value={fields.chesLeft}
                                    name="products"
                                />
                                <FlotingInput
                                    type="number"
                                    label="Tip"
                                    onChange={handleOnChange}
                                    id="tip"
                                    value={fields.chesLeft}
                                    name="tip"
                                />

                                <FlotingInput
                                    type="number"
                                    label="Total"
                                    onChange={handleOnChange}
                                    id="total"
                                    value={fields.chesLeft}
                                    name="total"
                                />

                            </div>
                            <div className="col-xl-4">
                                <FlotingInput
                                    type="number"
                                    label="Cash"
                                    onChange={handleOnChange}
                                    id="cash"
                                    value={fields.chesLeft}
                                    name="cash"
                                />

                                <FlotingInput
                                    type="number"
                                    label="check"
                                    onChange={handleOnChange}
                                    id="check"
                                    value={fields.chesLeft}
                                    name="check"
                                />

                                <FlotingInput
                                    type="number"
                                    label="Gift card"
                                    onChange={handleOnChange}
                                    id="gift-card"
                                    value={fields.chesLeft}
                                    name="giftCard"
                                />

                                <FlotingInput
                                    type="number"
                                    label="reward"
                                    onChange={handleOnChange}
                                    id="reward"
                                    value={fields.chesLeft}
                                    name="reward"
                                />

                                <div className="input-wrapper mb-3">
                                    <label for="total" class="form-label active">total</label>
                                    <input type="number" class="form-control" id="total" value={100} />
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </Modal>

            </div>

        </>
    )
}
