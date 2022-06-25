import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Filter from '../../components/Filter/Filter';
import Avatar from "../../components/Avatar";
import user from "../../assets/images/avatar.png";

export default function Calender() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className='position-relative'>
            <Filter
                pageTitle="Calender"
                search={true}
                select={true}
                searchBtn={true}
                serviceSelect={false}
                clear={true}
                addNew={true}
                pasignation={true}
            />

            <div className='card card-default my-3'>
                <div class="card-header d-flex flex-nowrap">
                    <h5 className='text-dark text-uppercase'>Products</h5>
                    <div>
                        <button class="btn btn-primary" >Add Product</button>
                    </div>
                </div>
                <div class="card-body">

                </div>

            </div>

            <div className="call-background">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <Avatar
                            src={user}
                            circle={true}
                            className="avatar-sm circle"
                        />
                    </div>
                    <div class="flex-grow-1 ms-3 text-white">
                        <h5 className='mb-0'>Sibbir Ahmad Mahadi</h5>
                        <span>03.33</span>
                    </div>
                </div>
                <ul className='list-unstyled'>
                    <li>
                        <button className='btn btn-iocn pill'>
                            <i className="mdi mdi-microphone-off"></i>
                        </button>
                    </li>
                    <li>
                        <button className='btn btn-iocn pill bg-danger'>
                            <i className="mdi mdi-phone"></i>
                        </button>
                    </li>
                    <li>
                        <button className='btn btn-iocn pill'>
                            <i className="mdi mdi-plus"></i>
                        </button>
                    </li>
                    <li>
                        <button className='btn btn-iocn pill' onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.601" height="16.602" viewBox="0 0 16.601 16.602">
                                <g id="Group_584" data-name="Group 584" transform="translate(-879.682 -468.97)">
                                    <path id="Path_3683" data-name="Path 3683" d="M896.283,468.97v6.745l-2.594-2.594-3.112,3.112-1.557-1.556,3.113-3.113-2.594-2.594Zm-9.338,10.895-3.113,3.113,2.594,2.594h-6.744v-6.745l2.594,2.594,3.113-3.112Zm0,0" fill="#fff" />
                                </g>
                            </svg>

                        </button>
                    </li>
                </ul>
            </div>

            <Modal isOpen={modal} wrapClassName="call-expand" fade={false} backdrop={false}>
                <ModalHeader toggle={toggle} tag="div">

                    <div className="d-flex header-content">
                        {/* Single Item  */}
                        <div className="single-item">
                            <li class="d-flex align-items-center mb-1">
                                <i class="mdi mdi-cake-variant me-2 font-size-20"></i>
                                <span class="line-height-1 mb-1">
                                    <span className='text-uppercase text-dark mb-1 text-sm d-block'>next birthday</span>
                                    <span class="text-small  font-weight-bold d-block">Fri Sep 17,2021</span>
                                </span>
                            </li>
                        </div>

                        {/* Single Item  */}
                        <div className="single-item">
                            <li class="d-flex align-items-center mb-1">
                                <i class="mdi mdi-cake-variant me-2 font-size-20"></i>
                                <span class="line-height-1 mb-1">
                                    <span className='text-uppercase text-dark mb-1 text-sm d-block'>next birthday</span>
                                    <span class="text-small  font-weight-bold d-block">Fri Sep 17,2021</span>
                                </span>
                            </li>
                        </div>

                        {/* Single Item  */}
                        <div className="single-item">
                            <li class="d-flex align-items-center mb-1">
                                <i class="mdi mdi-cake-variant me-2 font-size-20"></i>
                                <span class="line-height-1 mb-1">
                                    <span className='text-uppercase text-dark mb-1 text-sm d-block'>next birthday</span>
                                    <span class="text-small  font-weight-bold d-block">Fri Sep 17,2021</span>
                                </span>
                            </li>
                        </div>

                        {/* Single Item  */}
                        <div className="single-item">
                            <li class="d-flex align-items-center mb-1">
                                <i class="mdi mdi-cake-variant me-2 font-size-20"></i>
                                <span class="line-height-1 mb-1">
                                    <span className='text-uppercase text-dark mb-1 text-sm d-block'>next birthday</span>
                                    <span class="text-small  font-weight-bold d-block">Fri Sep 17,2021</span>
                                </span>
                            </li>
                        </div>

                        {/* Single Item  */}
                        <div className="single-item">
                            <li class="d-flex align-items-center mb-1">
                                <i class="mdi mdi-cake-variant me-2 font-size-20"></i>
                                <span class="line-height-1 mb-1">
                                    <span className='text-uppercase text-dark mb-1 text-sm d-block'>next birthday</span>
                                    <span class="text-small  font-weight-bold d-block">Fri Sep 17,2021</span>
                                </span>
                            </li>
                        </div>


                    </div>

                </ModalHeader>
                <ModalBody>
                    <div className="call-background">
                        <div class="d-flex align-items-center flex-column">
                            <div class="">
                                <Avatar
                                    src={user}
                                    circle={true}
                                    className="avatar-lg circle"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3 text-white">
                                <h5 className='mb-0'>Sibbir Ahmad Mahadi</h5>

                            </div>
                            <span>03.33</span>
                        </div>
                        <ul className='list-unstyled'>
                            <li>
                                <button className='btn btn-iocn pill'>
                                    <i className="mdi mdi-microphone-off"></i>
                                </button>
                            </li>
                            <li>
                                <button className='btn btn-iocn pill bg-danger'>
                                    <i className="mdi mdi-phone"></i>
                                </button>
                            </li>
                            <li>
                                <button className='btn btn-iocn pill'>
                                    <i className="mdi mdi-plus"></i>
                                </button>
                            </li>
                            <li>
                                <button className='btn btn-iocn pill' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.601" height="16.602" viewBox="0 0 16.601 16.602">
                                        <g id="Group_584" data-name="Group 584" transform="translate(-879.682 -468.97)">
                                            <path id="Path_3683" data-name="Path 3683" d="M896.283,468.97v6.745l-2.594-2.594-3.112,3.112-1.557-1.556,3.113-3.113-2.594-2.594Zm-9.338,10.895-3.113,3.113,2.594,2.594h-6.744v-6.745l2.594,2.594,3.113-3.112Zm0,0" fill="#fff" />
                                        </g>
                                    </svg>

                                </button>
                            </li>
                        </ul>
                    </div>
                </ModalBody>

            </Modal>


        </div>
    )
}
