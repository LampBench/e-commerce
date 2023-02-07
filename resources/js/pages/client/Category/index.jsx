import React from 'react';
import withPermission from '../../../routes/hocs/WithPermission';

function CategoryList() {
    return (
        <div>
            <h1>Category List</h1>
        </div>
    );
}

export default withPermission(['admin', 'user'])(CategoryList);