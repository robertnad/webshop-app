import React, { useContext } from 'react';
import ProductsContext from '../context/products-context';
import { Modal, Button } from 'antd';

const { confirm } = Modal;

const ProductDeleteForm = ({product}) => {

    const { dispatchProducts } = useContext(ProductsContext);

    const confirmDelete = () => {
        confirm({
            title: 'Do you want to delete this item?',
            onOk() {
                dispatchProducts({ type:'REMOVE_PRODUCT', id: product.id });
                console.log(`${product.name} deleted!`)
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