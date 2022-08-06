import styled from "styled-components";

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
gap: 0.5rem;
width:100%;
`;

export const Main = styled.main`
display: flex;
flex-direction: column;
padding-bottom: 1rem;
gap: 1em;
@media screen and (min-width: 40rem) {
margin: 0 auto;
max-width: 70vh;
width: 100%;


}
`;

export const ButtonGroups = styled.div`
display: grid;
grid-template-columns: 1fr;

/* align-items: center; */
gap: 1rem;
  @media screen and (min-width: 40rem) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
`;
