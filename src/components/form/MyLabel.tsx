import React from "react";
interface IProp {
  htmlFor: string,
  label: string,
  isRequired: boolean
}


const MyLabel = ({htmlFor, label, isRequired}: IProp) => {
    return (<label htmlFor={htmlFor}>{label}{isRequired ? <i className="text-danger pl-1 pr-1">*</i> : ""}</label>)
}
export default MyLabel
