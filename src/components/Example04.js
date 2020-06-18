import React, { useReducer } from "react";
const initialState = "";
const reducer = (state, action) => action;

const Example04 = () => {
  const [firstName, changeFirstName] = useReducer(reducer, initialState);
  const [lastName, changeLastName] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        First Name:
        <input value={firstName} onChange={changeFirstName} />
      </div>
      <div>
        Last Name:
        <input value={lastName} onChange={changeLastName} />
      </div>
    </>
  );
};

export default Example04;
