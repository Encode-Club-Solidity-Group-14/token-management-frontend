import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e2e1e5;
    padding: 10px 15px;
    font-size: 14px;

    ::placeholder {
      color: #e2e1e5;
    }
    :focus{
      outline: none;
      /* box-shadow: ; */
    }
  }
`;


