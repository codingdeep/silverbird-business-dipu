import { useState } from 'react'

import FlotingInput from '../../components/FlotingInput';

import InputDatePicker from '../../components/FlotingInput/InputDate';

const AddNewStaff = () => {
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        gender: "",
        accoutStatus: "",
    });

    const [startDate, setStartDate] = useState(
        new Date()
    );

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        })
    }

    console.log(fields.gender);

    return (
        <div>
            <div className="card card-default mb-5">
                <div className="card-header">
                    <h5>
                        Personal Info
                    </h5>
                    <div>
                        <div className="btn btn-sm btn-primary me-5">Save</div>
                        <span className="mdi mdi-close"></span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">

                            <FlotingInput
                                type="text"
                                label="FIRST NAME"
                                onChange={handleOnChange}
                                id="FIRST-NAME"
                                value={fields.firstName}
                                name="firstName"
                            // parentClass=""
                            />


                        </div>
                        <div className="col-3">

                            <FlotingInput
                                type="text"
                                label="Last Name"
                                onChange={handleOnChange}
                                id="last-name"
                                value={fields.lastName}
                                name="lastName"
                            // parentClass=""
                            />
                        </div>
                        <div className="col-3">

                            <FlotingInput
                                type="text"
                                label="Nick Name"
                                onChange={handleOnChange}
                                id="nick-name"
                                value={fields.nickName}
                                name="nickName"
                            />

                        </div>
                        <div className="col-3">


                            <InputDatePicker
                                label="Brith Day"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect={true}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="form-control"
                            />

                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="text"
                                label="Email"
                                onChange={handleOnChange}
                                id="email"
                                value={fields.email}
                                name="email"
                            />

                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="number"
                                label="Phone"
                                onChange={handleOnChange}
                                id="phone"
                                value={fields.phone}
                                name="phone"
                            />

                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Gender"
                                onChange={handleOnChange}
                                id="gender"
                                value={fields.gender}
                                name="gender"
                                options={["Female", "Male", "Others"]}
                            />

                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Account Status"
                                onChange={handleOnChange}
                                id="accoutStatus"
                                value={fields.accoutStatus}
                                name="accoutStatus"
                                options={["Active", "Inactive", "Others"]}
                            />

                        </div>
                    </div>

                </div>

            </div>
            <div className="card card-default mb-5">
                <div className="card-header">
                    <h5> Work Details  </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">

                            <FlotingInput
                                type="text"
                                label="Rep. Color"
                                onChange={handleOnChange}
                                id="FIRST-NAME"
                                value={fields.firstName}
                                name="firstName"
                            // parentClass=""
                            />

                        </div>

                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Chose Team"
                                onChange={handleOnChange}
                                id="selectTeam"
                                value={fields.selectTeam}
                                name="selectTeam"
                                options={["Nexa 20", "Nexa 21", "Nexa 10"]}
                            />
                        </div>

                        <div className="col-3">

                            <FlotingInput
                                type="text"
                                label="Referall Token"
                                onChange={handleOnChange}
                                id="referall-token"
                                value={fields.refToken}
                                name="refToken"
                            // parentClass=""
                            />
                        </div>

                        <div className="col-3">
                            <FlotingInput
                                type="text"
                                label="Instagram Url"
                                onChange={handleOnChange}
                                id="instagram-url"
                                value={fields.instagramUrl}
                                name="instagramUrl"
                            />

                        </div>

                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Expertise"
                                onChange={handleOnChange}
                                id="expertise"
                                value={fields.expertise}
                                name="expertise"
                                options={["Shampoo", "Nail", "Others"]}
                            />
                        </div>

                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Specialties"
                                onChange={handleOnChange}
                                id="Specialties"
                                value={fields.specialties}
                                name="Specialties"
                                options={["Select1", "Select2", "Select3"]}
                            />
                        </div>

                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Role"
                                onChange={handleOnChange}
                                id="Role"
                                value={fields.role}
                                name="role"
                                options={["Technician", "Technician2", "Technician 3"]}
                            />
                        </div>

                        <div className="col-3">
                            <FlotingInput
                                type="password"
                                label="Password"
                                onChange={handleOnChange}
                                id="password"
                                value={fields.password}
                                name="password"
                            />

                        </div>
                        <div className="col-6">
                            <FlotingInput
                                type="text"
                                label="Describe the Bio"
                                onChange={handleOnChange}
                                id="describe-bio"
                                value={fields.describeBio}
                                name="describeBio"
                            />

                        </div>



                    </div>
                </div>
            </div>
            <div className="card card-default mb-5">
                <div className="card-header">
                    <h5> Work Details  </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <FlotingInput
                                type="select"
                                label="Pay Option"
                                onChange={handleOnChange}
                                id="pay-option"
                                value={fields.role}
                                name="role"
                                options={["Hourly", "Weekly", "Monthly"]}
                            />
                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="text"
                                label="Pay Rate"
                                onChange={handleOnChange}
                                id="pay-rate "
                                value={fields.payRate}
                                name="payRate"
                            />
                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="number"
                                label="Product Commission (%)"
                                onChange={handleOnChange}
                                id="product-commission"
                                value={fields.productCommission}
                                name="productCommission"
                            />
                        </div>
                        <div className="col-3">
                            <FlotingInput
                                type="number"
                                label="Cash Ratio (%)"
                                onChange={handleOnChange}
                                id="cash-ratio"
                                value={fields.cashRatio}
                                name="cashRatio"
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input me-2" type="checkbox" role="switch" id="clock-in-remain" />
                                <label class="form-check-label" for="clock-in-remain"> Clock In Reminder</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input me-2" type="checkbox" role="switch" id="text-notification" />
                                <label class="form-check-label" for="text-notification">Text Notifications</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input me-2" type="checkbox" role="switch" id="email-notification" />
                                <label class="form-check-label" for="email-notification">Email Notifications</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check form-switch ">
                                <input class="form-check-input me-2" type="checkbox" role="switch" id="customer-booking-allowed" />
                                <label class="form-check-label" for="customer-booking-allowed">Customer Booking Allowed</label>
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input me-2" type="checkbox" role="switch" id="self-booking-enabled" />
                                <label class="form-check-label" for="self-booking-enabled">Self Booking Enabled</label>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewStaff;