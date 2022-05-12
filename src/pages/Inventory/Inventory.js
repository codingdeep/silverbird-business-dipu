import React from 'react';
import Filter from '../../components/Filter/Filter';


export default function Staff() {
    const [list, setList] = React.useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ])
    return (
        <>
            <Filter
                pageTitle="Invetory"
            />
            <div className='card card-default my-3'>
                <div class="card-header d-flex flex-nowrap">
                    <h5 className='text-dark text-uppercase'>Products</h5>
                    <div>
                        <button class="btn btn-primary">Add Product</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-default">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>size</td>
                                    <td>upc code</td>
                                    <td>qty</td>
                                    <td>msrp</td>
                                    <td>salon price</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn  btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn  btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A Gift Of Renewal For Your Journey Hand Reller Tri</td>
                                    <td>N/A</td>
                                    <td>01234789012</td>
                                    <td>100</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Air Control</td>
                                    <td>50ml</td>
                                    <td>01234789012</td>
                                    <td>53</td>
                                    <td>16.53</td>
                                    <td>33.65</td>
                                    <td>
                                        <button className='mdi mdi-eye-outline btn btn-sm'></button>
                                        <button className='mdi mdi-delete-outline btn btn-sm'></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </>
    )
}
