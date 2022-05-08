import React from 'react';


export default function Filter() {
    return (

        <div className='bg-white rounded py-3 px-5  shadow-sm'>
            <div className='row align-items-center'>

                <div className="col-xl-9">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <h5 className='text-uppercase text-dark mb-0'>Customar</h5>
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
                    <div className="d-flex justify-content-center">
                        <button className='btn btn-white btn-sm ms-2'>Clear Filter</button>
                        <button className='btn btn-white btn-sm ms-2'>
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
    )
}
