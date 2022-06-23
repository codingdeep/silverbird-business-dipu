import React from 'react';
import Filter from '../../components/Filter/Filter';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom'


import user from '../../assets/images/avatar.png';

export default function Customers() {
    return (
        <>
            <Filter
                pageTitle="Customar"
                search={true}
                select={true}
                searchBtn={true}
                serviceSelect={false}
                clear={true}
                addNew={true}
                pasignation={true}
            />
            <div>
                <div className="row mt-3">
                    {/* Sinlge  Item */}
                    <div className="col-xl-3">
                        <div className="card card-default mb-3 customer">
                            <div className="card-body">
                                <Link to="/customer-details" className='customer-details-link'>
                                    <div className="d-flex mb-2">
                                        <div className="flex-shrink-0 me-2">
                                            <Avatar src={user} circle={true} className="avatar-md rounded" />
                                        </div>
                                        <div className="flex-grow-1">

                                            <h6 className='text-dark'>Anna E. Johnson</h6>
                                            <span>$$305.00</span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
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
                                        <Avatar src={user} circle={true} className="avatar-md rounded" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className='text-dark'>Anna E. Johnson</h6>
                                        <span>$$305.00</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10">
                                        <ul class="list-unstyled">
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-cake-variant me-2 font-size-20"></i>
                                                <span className='text-dark'>09 10th, 2020</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-calendar me-2 font-size-20"></i>
                                                <span className='text-dark'>Sat, May 11 2019 01:46 am</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-phone me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <i className="mdi mdi-fencing me-2 font-size-20"></i>
                                                <span className='text-dark'>(301) 351-7872</span>
                                            </li>
                                        </ul>
                                        <div className="mt-3">
                                            <button className='btn btn-white btn-sm me-3'>Merge</button>
                                            <button className='btn btn-primary btn-sm'>Book</button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <ul class="list-unstyled mb-2 d-flex flex-column justify-content-between h-100 align-items-end">
                                            <li>
                                                <i className="mdi mdi-content-copy text-warning font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-delete-outline text-dangar font-size-24"></i>
                                            </li>
                                            <li>
                                                <i className="mdi mdi-calendar-range-outline text-success font-size-24"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
