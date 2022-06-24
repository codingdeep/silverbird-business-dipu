import React from "react";

export const Formulas = () => {
  return (
    <>
      <div className="card card-default">
        <div className="card-body px-5">

          <div className="d-flex align-items-center justify-content-between">
            <h4 className="text-uppercase text-dark">Formulas</h4>
            <button className="btn btn-primary">Add formula</button>
          </div>

          <div className="table-responsive">
            <table class="table table-default table-striped-light">
              <thead>
                <tr>
                  <td className="text-uppercase">last used</td>
                  <td className="text-uppercase">formula type</td>
                  <td className="text-uppercase">notes</td>
                  <td className="text-uppercase">stuff</td>
                  <td className="text-uppercase">Action</td>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(e => {
                    return <tr key={e.id}>
                      <td>
                        Wed, Oct 21 2020 12:21 pm
                      </td>
                      <td >
                        Color
                      </td>
                      <td>
                        For more love song subscribe...
                      </td>
                      <td >
                        Sirena
                      </td>
                      <td>
                        <div className="d-flex justify-content-end" >
                          <button className="btn btn-sm mdi mdi-pencil font-size-20 text-end me-3"></button>
                          <button className="btn btn-sm mdi mdi-delete font-size-20 text-end"></button>
                        </div>
                      </td>
                    </tr>
                  })
                }



              </tbody>
            </table>
          </div>

        </div>
      </div>

    </>
  );
};

export default Formulas;



export const data = [
  {
    id: 1,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 2,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 3,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 1,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 2,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 3,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 1,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 2,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 3,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 1,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 2,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },
  {
    id: 3,
    data: "Wed, Oct 21 2020 12:21 pm",
    formulaType: ["Color", "Hair Removal", "Nail Removal"],
    notes: "Sign up and get a 5% off sitewide coupon, valid only on new registration",
    staff: "Sirena"
  },

];
