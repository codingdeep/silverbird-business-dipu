import React from "react";
import AddNew from "../HeaderContent/AddNew";
import ClearFilter from "../HeaderContent/ClearFilter";
import SearchBar from "../HeaderContent/SearchBar";
import SearchBarBtn from "../HeaderContent/SearchBarBtn";
import SelectBar from "../HeaderContent/SelectBar";
import Pasignation from "../HeaderContent/Pasignation";
import ServiceSelect from "../HeaderContent/ServiceSelect";

export default function Filter(props) {
    const {
        search,
        select,
        searchBtn,
        clear,
        addNew,
        pasignation,
        serviceSelect,
    } = props;

    return (
        <div className="bg-white rounded py-3 px-5  shadow-sm">
            <div className="row align-items-center">
                <div className="col-xl-8 col-md-6 col-lg-7">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-2  mb-2 mb-xl-0">
                            <h5 className="text-uppercase text-dark mb-0">
                                {props.pageTitle}
                            </h5>
                        </div>

                        {search != false && <SearchBar />}
                        {select != false && <SelectBar />}
                        {searchBtn != false && <SearchBarBtn />}
                        {serviceSelect != false && <ServiceSelect {...props} />}
                    </div>
                </div>
                {search != false && <div className="col-xl-4 col-md-6 col-lg-5">
                    <div className="d-flex flex-column flex-wrap flex-md-row justify-content-end">
                        {clear != false && <ClearFilter />}
                        {addNew != false && <AddNew />}
                        {pasignation != false && <Pasignation />}

                    </div>
                </div>}
                {search == false && <SearchBar {...props} placeholder="Type a name" />}
            </div>
        </div>
    );
}
