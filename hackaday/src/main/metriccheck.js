import React, { useState } from 'react';

function MCheckbox() {
  const [checkedItems, setCheckedItems] = useState([]); // Initialize an empty array for checked items

  const checkboxes = [
    { id: 1, label: 'Accuracy' },
    { id: 2, label: 'Precision' },
  ];

  const handleCheckboxChange = (event) => {
    const label = event.target.name;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, label]); // Add the checked item to the array
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== label)); // Remove the unchecked item from the array
    }
  };

  return (
    <div className="checkbox-wrapper"> 
      {checkboxes.map((checkbox) => (
        <label key={checkbox.id}>
           

                <input
                  type="checkbox"
                  name={checkbox.label}
                  checked={checkedItems.includes(checkbox.label)}
                  onChange={handleCheckboxChange}
                />
                <span>{checkbox.label}</span>
          
          {/* {checkbox.label} */}
        </label>
      ))}
      <input
        type="text"
        value={checkedItems.join(', ')} // Use the join method to concatenate the selected items with a comma and space
        readOnly
      />
    </div>
  );
}

export default MCheckbox;