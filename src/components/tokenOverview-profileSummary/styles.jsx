import styled from "styled-components"

export const OverviewSection = styled.section`
display: flex;
flex-direction: column;
gap: 2rem;

p{
    overflow-wrap:break-word;
}
@media screen  and (min-width: 40rem){  
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2.5rem 0;
}
`;