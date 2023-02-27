export const transformURL = (url, params) => {
    Object.keys(params).forEach(element => {
        if (element == "filterFields") {
            let filterFields = params[element];
            Object.keys(filterFields).forEach(filterField => {
                if (filterFields[filterField].value !== "") {
                    url += filterFields[filterField].field + "=" + filterFields[filterField].value;
                    url += "&";
                }
            })
        }
        else {
            url += element + "=" + params[element];
            url += "&";
        }
    });
    return url;
}