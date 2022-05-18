import React, { useState, Component } from 'react';
import { Modal, ModalHeader, ModalBody, Input, FormGroup, Label } from "reactstrap";

import Avatar from '../../components/Avatar';
import user from '../../assets/images/avatar.png';
import user2 from '../../assets/images/avatar2.png';
import user3 from '../../assets/images/avatar3.png';




class Payroll extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serviceList: [
                { batchNo: 1020, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
                { batchNo: 1021, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
                { batchNo: 1022, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
                { batchNo: 1023, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
                { batchNo: 1024, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
                { batchNo: 1025, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
            ],
            modal: false,
            modalData: [
                {
                    id: 1,
                    imgUrl: user,
                    name: "Cindy",
                    revenue: 3241.00,
                    adjustment: 7412.00,
                    income: 25469.50,
                    adjustment2: 0.00,

                },
                {
                    id: 2,
                    imgUrl: user2,
                    name: "Cindy",
                    revenue: 1452.00,
                    adjustment: 9874.00,
                    income: 9658.50,
                    adjustment2: 0.00,

                },
                {
                    id: 3,
                    imgUrl: user3,
                    name: "Cindy",
                    revenue: 951.00,
                    adjustment: 753.00,
                    income: 8520.50,
                    adjustment2: 0.00,

                },
            ],
            activeItem: {},
            acStatus: false

        }
    }

    modalToggle = () => {
        this.setState(state => {
            return {
                modal: !state.modal
            }
        })
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleEdit = (e) => {

        this.setState({
            activeItem: e,
            acStatus: true
        })
    }

    handleCancel = () => {

        this.setState({
            activeItem: {}
        })
    }



    render() {
        const { modal, serviceList, modalData, activeItem } = this.state;

        return (
            <>
                <div className='bg-white rounded p-5  shadow-sm'>
                    <h5 className='text-uppercase text-dark mb-0'>Payroll</h5>
                </div>

                <div className='card card-default my-3' >
                    <div class="card-header d-flex flex-nowrap">
                        <h5 className='text-dark text-uppercase'>Services</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-default">
                                <thead>
                                    <tr>
                                        <td className='text-uppercase'>BATCH NO</td>
                                        <td className='text-uppercase'>PERIOD</td>
                                        <td className='text-uppercase'>GROSS</td>
                                        <td className='text-uppercase'>GROSS ADJ</td>
                                        <td className='text-uppercase'>payout</td>
                                        <td className='text-uppercase'>payout ADJ</td>
                                        <td className='text-uppercase'>action</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        serviceList.map(e => {
                                            return (
                                                <tr key={e.batchNo}>
                                                    <td>{e.batchNo}</td>
                                                    <td>{e.startDate} - {e.endDate}</td>
                                                    <td>{e.gross}</td>
                                                    <td>{e.grossAjd}</td>
                                                    <td>${e.payout}</td>
                                                    <td>${e.payoutAdj}</td>
                                                    <td>
                                                        <button className='btn btn-primary btn-sm' onClick={this.modalToggle}>process</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }



                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <div className='card card-default my-3'>
                    <div class="card-header d-flex flex-nowrap">
                        <h5 className='text-dark text-uppercase'>Products</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-default">
                                <thead>
                                    <tr>
                                        <td className='text-uppercase'>BATCH NO</td>
                                        <td className='text-uppercase'>PERIOD</td>
                                        <td className='text-uppercase'>GROSS</td>
                                        <td className='text-uppercase'>GROSS ADJ</td>
                                        <td className='text-uppercase'>payout</td>
                                        <td className='text-uppercase'>payout ADJ</td>
                                        <td className='text-uppercase'>action</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        serviceList.map(e => {
                                            return (
                                                <tr key={e.batchNo}>
                                                    <td>{e.batchNo}</td>
                                                    <td>{e.startDate} - {e.endDate}</td>
                                                    <td>{e.gross}</td>
                                                    <td>{e.grossAjd}</td>
                                                    <td>${e.payout}</td>
                                                    <td>${e.payoutAdj}</td>
                                                    <td>
                                                        <button className='btn btn-primary btn-sm' onClick={this.modalToggle}>process</button>
                                                    </td>
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
                        size="xl"
                    >
                        <ModalHeader toggle={this.modalToggle} tag="div" className='modal-header-default'>
                            <div>
                                <h6>
                                    <span className='text-uppercase text-dark me-3'>Batch 1001</span>
                                    <span className='text-uppercase'>01/03/2020 - 01/17/2020</span>
                                </h6>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div>
                                        <span className='text-uppercase text-dark'>type:</span>
                                        <span className='text-uppercase text-warning'>Service</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='me-7'>
                                        <span className='text-uppercase text-dark'>Status:</span>
                                        <span className='text-uppercase text-warning'>INITIATED</span>

                                    </div>
                                </div>
                            </div>

                        </ModalHeader>
                        <ModalBody onClick={this.handleTestClose}>
                            <div class="table-responsive">
                                <table class="table table-default">
                                    <thead>
                                        <tr>
                                            <td className='text-uppercase'>Staff</td>
                                            <td className='text-uppercase'>Revenue</td>
                                            <td className='text-uppercase'>Adjustment</td>
                                            <td className='text-uppercase'>Income</td>
                                            <td className='text-uppercase'>Adjustment</td>
                                            <td className='text-uppercase'>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {
                                            modalData.map(e => {
                                                return (<tr key={e.id}>
                                                    <td className='text-uppercase'>
                                                        <FormGroup check className='d-flex align-items-center'>
                                                            <Input
                                                                id="checkbox2"
                                                                type="checkbox"
                                                                className="me-2"
                                                            />

                                                            <Label check htmlFor='checkbox2' className='mb-0'>
                                                                <Avatar src={e.imgUrl} className="avatar-sm me-2" />
                                                                {e.name}
                                                            </Label>
                                                        </FormGroup>

                                                    </td>
                                                    <td className='text-uppercase'>
                                                        {e.id === activeItem.id ?
                                                            <Input type="text" name="revenue" value={e.revenue} className="width-150" />
                                                            : e.revenue
                                                        }

                                                    </td>
                                                    <td className='text-uppercase'>
                                                        {e.id === activeItem.id ? <Input type="text" name="adjustment" value={e.adjustment} className="width-150" /> : e.adjustment}
                                                    </td>
                                                    <td className='text-uppercase'>
                                                        {e.id === activeItem.id ? <Input type="text" name="income" value={e.income} className="width-150" /> : e.income}
                                                    </td>
                                                    <td className='text-uppercase'>
                                                        {e.id === activeItem.id ? <Input type="text" name="adjustment2" value={e.adjustment2} className="width-150" /> : e.adjustment2}

                                                    </td>
                                                    <td>
                                                        <button className='mdi mdi-pencil btn btn-sm' onClick={() => this.handleEdit(e)}></button>
                                                        {
                                                            e.id === activeItem.id ?
                                                                <button className='mdi mdi-cancel btn btn-sm' onClick={this.handleCancel}></button>
                                                                : <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                                        }

                                                        <button className='mdi mdi-content-save-edit-outline btn btn-sm'></button>

                                                    </td>
                                                </tr>)
                                            })
                                        }






                                    </tbody>
                                </table>
                            </div>
                        </ModalBody>

                    </Modal>

                </div>

            </>
        )
    }
}

export default Payroll;

// export default function Payroll() {

//     const [modal, setModal] = useState(false);
//     const modalToggle = () => {
//         setModal(!modal)
//     }
//     const [serviceList, setServiceList] = React.useState();





// }
