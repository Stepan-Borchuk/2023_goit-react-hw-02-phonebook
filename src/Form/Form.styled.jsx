import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const Box = styled(Form)`
 display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${p => p.theme.space[3]}px;
  border: 9px;
  border-color: ${p => p.theme.colors.accent};
`;

export const Input = styled(Field)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accentText};
`;

export const SubmitButton = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  width: 140px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    color: white;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.error};
`;