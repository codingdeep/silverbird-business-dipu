// import React from 'react';


// export default function Filter(props) {
//     const { filter } = props
//     console.log(filter);
//     return (

//         <div className='bg-white rounded py-3 px-5  shadow-sm'>
//             <div className='row align-items-center'>

//                 <div className="col-xl-9">
//                     <div className="row align-items-center">
//                         <div className="col-lg-2">
//                             <h5 className='text-uppercase text-dark mb-0'>{props.pageTitle}</h5>
//                         </div>
//                         {filter != false ?
//                             <>
//                                 <div className="col-lg-4">
//                                     <input type="text" className="form-control form-control-pill border-0" />
//                                 </div>
//                                 <div className="col-lg-2">
//                                     <select name="" id="" className='form-select form-select-sm bg-white'>
//                                         <option value="">All</option>
//                                         <option value="">One</option>
//                                         <option value="">Two</option>
//                                         <option value="">Three</option>
//                                     </select>
//                                 </div>
//                                 <div className="col-lg-2">
//                                     <button className='btn btn-warning text-white btn-sm'>Search</button>
//                                 </div>
//                             </> : <>
//                                 <div className="col-lg-8 justify-content-center align-items d-flex">
//                                     <h3>Rubel</h3></div>
//                             </>
//                         }
//                     </div>


//                 </div>
//                 <div className="col-xl-3">
//                     <div className="d-flex justify-content-end">
//                         <button className='btn btn-white btn-sm ms-2'>Clear Filter</button>
//                         <button className='btn btn-white btn-sm ms-2' onClick={props.handleAddNew}>
//                             <i className="mdi mdi-account-plus-outline me-2"></i>
//                             Add New
//                         </button>
//                         <div className='ms-2'>
//                             <button className='btn btn-white btn-sm ms-2'>
//                                 <i className="mdi mdi-chevron-left"></i>
//                             </button>
//                             <button className='btn btn-white btn-sm ms-2'>
//                                 <i className="mdi mdi-chevron-right"></i>
//                             </button>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }




import React from 'react';


export default function Filter(props) {
    const { filter } = props;
    console.log(props)
    return (

        <div className='bg-white rounded py-3 px-5  shadow-sm'>
            <div className='row align-items-center'>

                <div className="col-xl-8 col-md-6 col-lg-7">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-2  mb-2 mb-xl-0">
                            <h5 className='text-uppercase text-dark mb-0'>{props.pageTitle}</h5>
                        </div>

                        {filter != false ?
                            <>
                                <div className="col-md-6 col-xl-4 mb-2 mb-xl-0">
                                    <input type="text" className="form-control form-control-pill border-0" />
                                </div>
                                <div className="col-md-6 col-xl-4 mb-2">
                                    <select name="" id="" className='form-select form-select-sm bg-white'>
                                        <option value="">All</option>
                                        <option value="">One</option>
                                        <option value="">Two</option>
                                        <option value="">Three</option>
                                    </select>
                                </div>
                                <div className=" col-md-4 col-xl-2 mb-2">
                                    <button className='btn btn-warning text-white btn-sm'>Search</button>
                                </div>
                            </> : <div className="col-lg-4 ">
                                <div className='text-uppercase text-center'>
                                    <h6>select service</h6>
                                    <select name="" id="" className='form-select form-select-sm bg-white'>
                                        <option value="">Hair</option>
                                        <option value="">Nail</option>
                                    </select>
                                    {/* <h6>Hair <span><i className='mdi mdi-chevron-down'></i></span></h6> */}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-5">
                    <div className="d-flex flex-column flex-wrap flex-md-row justify-content-end">
                        <button className='btn btn-white btn-sm ms-lg-2 mb-2'>Clear Filter</button>
                        <button className='btn btn-white btn-sm ms-md-2 mb-2' onClick={props.handleAddNew}>
                            <i className="mdi mdi-account-plus-outline me-2"></i>
                            Add New
                        </button>
                        <div className='ms-md-2 d-inline-block'>
                            <button className='btn btn-white btn-sm ms-lg-2 '>
                                <i className="mdi mdi-chevron-left"></i>
                            </button>
                            <button className='btn btn-white btn-sm ms-2 '>
                                <i className="mdi mdi-chevron-right"></i>
                            </button>
                        </div>

                    </div>
                    {/* <div className="row">
                        <div className="col-md-12 col-lg-6 col-xs-6 mb-2 col-xxl-4">
                            <button className='btn btn-white btn-sm'>Clear Filter</button>

                        </div>
                        <div className="col-md-12 col-lg-6 col-xs-6 mb-2 col-xxl-4">
                            <button className='btn btn-white btn-sm btn-block' onClick={props.handleAddNew}>
                                <i className="mdi mdi-account-plus-outline me-2"></i>
                                Add New
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xs-6 col-xxl-4">
                            <div className='m-md-s-2 d-inline-block '>
                                <button className='btn btn-white btn-sm'>
                                    <i className="mdi mdi-chevron-left"></i>
                                </button>
                                <button className='btn btn-white btn-sm'>
                                    <i className="mdi mdi-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        </div>
    )
}
