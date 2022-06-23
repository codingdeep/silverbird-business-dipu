import React from 'react'

const ServiceSelect = ({ col }) => {
    return (
        <>
            <div className={`col-lg-${col ? col : 4} mx-auto`}>
                <div className='text-uppercase text-center'>
                    <h6>select service</h6>
                    <select name="" id="" className='form-select form-select-sm bg-white'>
                        <option value="">Hair</option>
                        <option value="">Nail</option>
                    </select>
                    {/* <h6>Hair <span><i className='mdi mdi-chevron-down'></i></span></h6> */}
                </div>
            </div>
        </>
    )
}

export default ServiceSelect;
