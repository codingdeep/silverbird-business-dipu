import React from 'react'

export default function HomeStatus() {
    return (
        <div className='mb-3'>
            <div className="row">
                {/* item  */}
                <div className="col-md-6 col-lg-4 col-xxl-2">
                    <div className="card card-default px-4 py-3 mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0 ">
                                <div className="icon rounded-circle bg-primary-opacity">
                                    <i className='mdi mdi-account'></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <strong className='d-block text-dark'>394</strong>
                                <span>New Guests</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* item  */}
                <div className="col-md-6 col-lg-4 col-xxl-2">
                    <div className="card card-default px-4 py-3 mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0 ">
                                <div className="icon rounded-circle bg-success-opacity">
                                    <i className='mdi mdi-account-supervisor-circle'></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <strong className='d-block text-dark'>394</strong>
                                <span>Repeat Guests</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* item  */}
                <div className="col-md-6 col-lg-4 col-xxl-2">
                    <div className="card card-default px-4 py-3 mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0 ">
                                <div className="icon rounded-circle bg-info-opacity">
                                    <i className='mdi mdi-walk'></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <strong className='d-block text-dark'>394</strong>
                                <span>Walk Ins</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* item  */}
                <div className="col-md-6 col-lg-4 col-xxl-2">
                    <div className="card card-default px-4 py-3 mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0 ">
                                <div className="icon rounded-circle bg-warning-opacity">
                                    <i className='mdi mdi-phone'></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <strong className='d-block text-dark'>394</strong>
                                <span>Phone</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* item  */}
                <div className="col-md-6 col-lg-4 col-xxl-2">
                    <div className="card card-default px-4 py-3 mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0 ">
                                <div className="icon rounded-circle bg-danger-opacity">
                                    <i className='mdi mdi-cellphone-settings'></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <strong className='d-block text-dark'>394</strong>
                                <span>App</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* item  */}
                <div className="col-md-6 col-lg-4 col-xxl-2">
                    <div className="card card-default px-4 py-3 mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0 ">
                                <div className="icon rounded-circle bg-purple-opacity">
                                    <i className='mdi mdi-web'></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <strong className='d-block text-dark'>394</strong>
                                <span>Web Site</span>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
