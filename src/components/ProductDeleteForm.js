import React, { useContext } from 'react';
import ProductsContext from '../context/products-context';
import { Modal, Button } from 'antd';

const { confirm } = Modal;

const ProductDeleteForm = ({product}) => {

    const { dispatch } = useContext(ProductsContext);

    const confirmDelete = () => {
        confirm({
            title: 'Do you want to delete this item?',
            onOk() {
                dispatch({ type:'REMOVE_PRODUCT', id: product.id });
            },
            onCancel() {}
        });
    }

    return (
        <div>
            <Button onClick={confirmDelete}>Remove (admin)</Button>
        </div>
    );
}

export default ProductDeleteForm;