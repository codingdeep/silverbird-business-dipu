import React from 'react';
import Filter from '../../components/Filter/Filter';
import Avatar from '../../components/Avatar';


import user from '../../assets/images/avatar.png';

export default function Staff(props) {

    const handleAddNew = () => {
        props.history.push('/add-new-staff')
    }


    return (
        <>
            <Filter
                pageTitle="Staff"
                handleAddNew={handleAddNew}
            />
            <div>
                <div className="row mt-3">
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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


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
                                        <span>Cosmetologist</span>
                                    </div>
                                </div>
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
                                </ul>


                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
