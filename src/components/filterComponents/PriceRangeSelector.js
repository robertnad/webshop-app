import React, { useContext } from 'react';
import ProductsContext from '../../context/products-context';
import { Slider } from 'antd';

const PriceRangeSelector = () => {

  const { dispatchFilters } = useContext(ProductsContext);

  // const onChange = (value) => {
  //   console.log(`onChange: ${value}`);
  // }
  
  const onAfterChange = (value) => {
    dispatchFilters({
      type: 'FILTER_BY_PRICE_RANGE_LOW'
    });
    console.log(`onAfterChange: ${value[0]}`);
  }

  return (
    <div>
        <p>Select price range</p>
        <Slider
            range
            step={5}
            defaultValue={[0, 500]}
            // onChange={onChange}
            onAfterChange={onAfterChange}
        />
    </div>
  );
}

export default PriceRangeSelector;