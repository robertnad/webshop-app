import React from 'react';
// import ProductsContext from '../context/products-context';
import ProductEditForm from '../components/ProductEditForm';
import ProductDeleteForm from '../components/ProductDeleteForm';
import { Button, /*Rate*/ } from 'antd';
import { PageHeader, Descriptions, Statistic } from 'antd';

const Product = ({ product }) => {



    /* PAGE HEADER */
  const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Manufacturer">{product.manufacturer}</Descriptions.Item>
      <Descriptions.Item label="Date added">{product.dateAdded}</Descriptions.Item>
      <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
      <Descriptions.Item label="Id">{product.id}</Descriptions.Item>
    </Descriptions>
  );
  
  const extraContent = (
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        justifyContent: 'flex-end'
      }}
    >
      <Statistic
        title="Amount"
        value="1"
        style={{
          marginRight: 32,
        }}
      />
      <Statistic 
        title="Price"
        prefix="€"
        value={product.price}
        style={{
          marginRight: 32,
        }} 
      />
      <Statistic title="Discount" suffix="%" value={product.discount} />
    </div>
  );
  
  const Content = ({ children, extra }) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
      </div>
    );
  };

return (
    <div>
        <PageHeader
            style={{
            border: '1px solid #a9a9a9',
            borderRadius: '10px',
            margin: '50px'
            }}
            title={product.name}
            extra={[
                <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                    <ProductDeleteForm product={product} />
                    <ProductEditForm product={product} />
                    <Button style={{width:'130px', marginLeft:'5px'}}>Add to cart</Button>
                </div>
            ]}
        >
            <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
    </div>
);
}

export default Product;

// name={product.name}
// price={product.price}
// discount={product.discount}
// manufacturer={product.manufacturer}
// description={product.description}


// <h3>{product.name}</h3>
// <p>{product.price}</p>
// <p>{product.description}</p>
// <Button onClick={confirmDelete}>Remove</Button>