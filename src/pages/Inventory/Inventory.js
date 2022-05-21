import React, { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FlotingInput from '../../components/FlotingInput';


export default function Staff() {
    const [list, setList] = React.useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ]);

    const [fields, setFields] = useState({
        chesMet: "",
        chesLeft: "",
    })

    const [newActivtiyInputList, setNewActivtiyInputList] = useState([{ productName: "", cost: "", qty: "" }]);

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const modalToggle = () => {
        setModal(!modal)
    }

    const modalToggle2 = () => {
        setModal2(!modal2)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        })

    }

    const handleAddActivity = (e) => {

        const newFiels = { productName: "", cost: "", qty: "" }

        setNewActivtiyInputList(newActivtiyInputList.concat(newFiels))
    }

    const handleDeleteNewAcitivity = (deleteItem) => {

        if (newActivtiyInputList.length > 1) {
            const rows = [...newActivtiyInputList];

            rows.splice(deleteItem, 1);
            setNewActivtiyInputList(rows)
        }


    }


    return (
        <>
            <div className='bg-white rounded py-3 px-5  shadow-sm'>
                <div className='row align-items-center'>

                    <div className="col-xl-9">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <h5 className='text-uppercase text-dark mb-0'>Inventory</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" className="form-control form-control-pill border-0" />
                            </div>
                            <div className="col-lg-2">
                                <select name="" id="" className='form-select form-select-sm bg-white'>
                                    <option value="">All</option>
                                    <option value="">One</option>
                                    <option value="">Two</option>
                                    <option value="">Three</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <button className='btn btn-warning text-white btn-sm'>Search</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-xl-3">
                        <div className="d-flex justify-content-end">
                            <button className='btn btn-white btn-sm ms-2'>Clear Filter</button>
                            <button className='btn btn-white btn-sm ms-2' onClick={modalToggle2}>
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
                    <h5 className='text-dark text-uppercase'>Products</h5>
                    <div>
                        <button class="btn btn-primary" onClick={modalToggle}>Add Product</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-default">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>size</td>
                                    <td>upc code</td>
                                    <td>qty</td>
                                    <td>msrp</td>
                                    <td>salon price</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn  btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn  btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <Modal
                isOpen={modal}
                size="md"
            >
                <ModalHeader toggle={modalToggle} tag="div" className='modal-header-default'>
                    <h6 className='text-uppercase'>Add Product</h6>
                    <div className='d-flex align-items-center justify-content-end'>
                        <button className='btn btn-primary btn-sm me-3'>Save</button>
                    </div>

                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-wrapper-datepicker mb-3">
                                <label for="start-time" class="form-label">Select Brand</label>
                                <select class="form-control form-select" aria-label="Default select example">
                                    <option value="1">Brazillian Blowout</option>
                                    <option value="2">Nokia</option>
                                    <option value="3">Microsoft</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-6">
                            <FlotingInput
                                type="text"
                                label="Product Name"
                                onChange={handleOnChange}
                                id="chesMet"
                                value={fields.chesMet}
                                name="chesMet"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <FlotingInput
                                label="UPC"
                                type="text"
                                onChange={handleOnChange}
                                id="chesMet"
                                value={fields.chesMet}
                                name="chesMet"
                            />
                        </div>
                        <div className="col-4">
                            <FlotingInput
                                label="MSRP"
                                type="text"
                                onChange={handleOnChange}
                                id="chesMet"
                                value={fields.chesMet}
                                name="chesMet"
                            />

                        </div>
                        <div className="col-4">
                            <FlotingInput
                                label="SALE PRICE"
                                type="text"
                                onChange={handleOnChange}
                                id="chesMet"
                                value={fields.chesMet}
                                name="chesMet"
                            />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-wrapper-datepicker mb-3">
                                <label for="start-time" class="form-label">Choose Attribute</label>
                                <select class="form-control form-select" aria-label="Default select example">
                                    <option value="1">Box 1</option>
                                    <option value="2">Box 2</option>
                                    <option value="3">Box 3</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-6">
                            <FlotingInput
                                label="Weight/qty"
                                type="text"
                                onChange={handleOnChange}
                                id="chesMet"
                                value={fields.chesMet}
                                name="chesMet"
                            />
                        </div>
                    </div>



                </ModalBody>

            </Modal>

            <Modal
                isOpen={modal2}
                size="lg"
            >
                <ModalHeader toggle={modalToggle2} tag="div" className='modal-header-default'>
                    <h6 className='text-uppercase'>New Activity</h6>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Intake" value="option1" />
                            <label class="form-check-label" for="Intake">Intake</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Adjustment" value="option2" />
                            <label class="form-check-label" for="Adjustment">Adjustment</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Return" value="option3" />
                            <label class="form-check-label" for="Return">Return</label>
                        </div>
                    </div>


                    <div className='d-flex align-items-center justify-content-end'>
                        <button className='btn btn-primary btn-sm me-3'>Save</button>
                    </div>

                </ModalHeader>
                <ModalBody>
                    <div className='row mb-6'>
                        <div className="col-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type Invoice" />
                        </div>
                        <div className="col-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search Product" />
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-default">
                            <thead>
                                <tr>
                                    <td>Product </td>
                                    <td>Cost</td>
                                    <td>Qty</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newActivtiyInputList.map((e, i) => {
                                        return <tr>
                                            <td>
                                                <input type="text" className='form-control' />
                                            </td>

                                            <td>
                                                <input type="text" className='form-control' />
                                            </td>
                                            <td>
                                                <input type="text" className='form-control' />
                                            </td>
                                            <td>
                                                <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                                <button className='mdi mdi-delete-outline btn btn-sm' onClick={() => handleDeleteNewAcitivity(i)}></button>
                                                {newActivtiyInputList.length - 1 === i && <button className='mdi mdi-plus btn btn-sm' onClick={handleAddActivity}></button>}



                                            </td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>



                </ModalBody>

            </Modal>



        </>
    )
}
