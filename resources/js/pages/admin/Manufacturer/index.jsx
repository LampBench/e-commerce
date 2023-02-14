import React, { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import ManufacturerService from "../../../services/manufacturer.service";
import { manufacturersColumns } from "../../../constants/shared/columns/manufacturers.columns.constant";

const Manufacturer = () => {
    const [params, setParams] = useState({
        page: 1,
        sort: "name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const service = (params) => {
        return ManufacturerService.getManufacturers(params);
    };

    return (
        <MainCard title="Manufacturer list">
            <DataTable
                columns={manufacturersColumns}
                params={params}
                setParams={setParams}
                service={service}
            />
        </MainCard>
    );
};

export default withPermission("manufacturers", "view")(Manufacturer);
