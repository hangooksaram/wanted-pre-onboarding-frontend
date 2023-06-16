import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import Input from "./Input";

const Label = styled.div`
  color: #888;
  font-weight: bold;
  margin-bottom: 8px;
`;

const LabeledInput = forwardRef<HTMLInputElement, any>(
  ({ ...functions }, ref) => {
    return (
      <React.Fragment>
        <Label>{functions.label}</Label>
        <Input ref={ref} {...functions} />
      </React.Fragment>
    );
  }
);

export default LabeledInput;
