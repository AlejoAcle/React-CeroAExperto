import React from "react";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  };


  const onSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length <=1 ) return;

    // setCategories ( categories => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
    
  }

  return (
    <>
      <form onSubmit={ onSubmit}>
        <input
          type="text"
          placeholder="Search GIF"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
