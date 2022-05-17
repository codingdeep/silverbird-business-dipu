import React from 'react';
import Filter from '../../components/Filter/Filter';


export default function Payroll() {
    const [serviceList, setServiceList] = React.useState([
        { batchNo: 1020, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
        { batchNo: 1021, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
        { batchNo: 1022, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
        { batchNo: 1023, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
        { batchNo: 1024, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
        { batchNo: 1025, startDate: "01/17/2020", endDate: "01/31/2020", gross: 250.00, grossAjd: 5.00, payout: 250.00, payoutAdj: 5.00 },
    ])
    return (
        <>
            <div className='bg-white rounded p-5  shadow-sm'>
                <h5 className='text-uppercase text-dark mb-0'>Payroll</h5>
            </div>

            <div className='card card-default my-3'>
                <div class="card-header d-flex flex-nowrap">
                    <h5 className='text-dark text-uppercase'>Services</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-default">
                            <thead>
                                <tr>
                                    <td className='text-uppercase'>BATCH NO</td>
                                    <td className='text-uppercase'>PERIOD</td>
                                    <td className='text-uppercase'>GROSS</td>
                                    <td className='text-uppercase'>GROSS ADJ</td>
                                    <td className='text-uppercase'>payout</td>
                                    <td className='text-uppercase'>payout ADJ</td>
                                    <td className='text-uppercase'>action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    serviceList.map(e => {
                                        return (
                                            <tr key={e.batchNo}>
                                                <td>{e.batchNo}</td>
                                                <td>{e.startDate} - {e.endDate}</td>
                                                <td>{e.gross}</td>
                                                <td>{e.grossAjd}</td>
                                                <td>${e.payout}</td>
                                                <td>${e.payoutAdj}</td>
                                                <td>
                                                    <button className='btn btn-primary btn-sm'>process</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div className='card card-default my-3'>
                <div class="card-header d-flex flex-nowrap">
                    <h5 className='text-dark text-uppercase'>Products</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-default">
                            <thead>
                                <tr>
                                    <td className='text-uppercase'>BATCH NO</td>
                                    <td className='text-uppercase'>PERIOD</td>
                                    <td className='text-uppercase'>GROSS</td>
                                    <td className='text-uppercase'>GROSS ADJ</td>
                                    <td className='text-uppercase'>payout</td>
                                    <td className='text-uppercase'>payout ADJ</td>
                                    <td className='text-uppercase'>action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    serviceList.map(e => {
                                        return (
                                            <tr key={e.batchNo}>
                                                <td>{e.batchNo}</td>
                                                <td>{e.startDate} - {e.endDate}</td>
                                                <td>{e.gross}</td>
                                                <td>{e.grossAjd}</td>
                                                <td>${e.payout}</td>
                                                <td>${e.payoutAdj}</td>
                                                <td>
                                                    <button className='btn btn-primary btn-sm'>process</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </>
    )
}
