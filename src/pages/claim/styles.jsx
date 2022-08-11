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

export const ManagerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 10rem;
`;

export const TokenManagerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  .snapshot-pause-btn{
    display: flex;
    justify-content: end;
    gap: 1.5rem;
  }

  .snapshot{
    width: 130px;
    font-size: 12px;
    line-height: 24px;
    height: 44px;
    font-family: 'Inter';
    font-weight: 700;
  }
  .emergency{
    width: 130px;
    font-size: 12px;
    line-height: 24px;
    height: 44px;
    background: #F14668;
    font-family: 'Inter';
    font-weight: 700;
  }
`;
