import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Form = styled.form`
  min-width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: #fff;
  padding: 0 4px;
  border-radius: 3px;
  margin-top: 8px;
  outline: none;
  border: 1px solid #ccc;
`;

type FormFieldProps = {
  label?: string;
};

export const FormField: FunctionComponent<FormFieldProps> = ({
  label,
  children
}) => (
  <StyledFormField>
    {label && <Label>{label}</Label>}
    <FormFieldBody>{children}</FormFieldBody>
  </StyledFormField>
);

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const FormFieldBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
