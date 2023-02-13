import React, { useState } from "react";
import withPermission from "../../../routes/hocs/WithPermission";
import DataTable from "../../../components/shared/DataTable";
import { MainCard } from "../../../components/shared";
import AuthorService from "../../../services/author.service";
import { authorsColumns } from "../../../constants/shared/columns/authors.columns.constant";

const Author = () => {
    const [params, setParams] = useState({
        page: 1,
        sort: "author-name",
        order: "asc",
        perPage: "10",
        search: "",
    });

    const service = (params) => {
        return AuthorService.getAuthors(params);
    };

    return (
        <MainCard title="Author list">
            <DataTable
                columns={authorsColumns}
                params={params}
                setParams={setParams}
                service={service}
            />
        </MainCard>
    );
};

export default withPermission("authors", "view")(Author);
