import React from 'react';
import { Slider } from 'antd';

function onChange(value) {
  console.log(`onChange: ${value}`);
}

function onAfterChange(value) {
  console.log(`onAfterChange: ${value}`);
}

const PriceRangeSelector = () => {
    return (
        <div>
            <p>Select price range</p>
            <Slider
                range
                step={1}
                defaultValue={[10, 90]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </div>
    );
}

export default PriceRangeSelector;