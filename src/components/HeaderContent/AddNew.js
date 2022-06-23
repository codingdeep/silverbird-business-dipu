import React from 'react'

const AddNew = (props) => {
    return (
        <>
            <button className='btn btn-white btn-sm ms-md-2 mb-2' onClick={props.handleAddNew}>
                <i className="mdi mdi-account-plus-outline me-2"></i>
                Add New
            </button>
        </>
    )
}

export default AddNew
