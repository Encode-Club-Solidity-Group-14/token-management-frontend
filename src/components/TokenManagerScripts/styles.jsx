import styled from 'styled-components'

export const TokenManagerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  .snapshot-pause-btn {
    display: flex;
    justify-content: end;
    gap: 1.5rem;
  }

  .snapshot {
    width: 130px;
    font-size: 12px;
    line-height: 24px;
    height: 44px;
    font-family: 'Inter';
    font-weight: 700;
  }
  .emergency {
    width: 130px;
    font-size: 12px;
    line-height: 24px;
    height: 44px;
    background: #f14668;
    font-family: 'Inter';
    font-weight: 700;
  }

  .column {
    float: left;
    width: 50%;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .row:after {
    display: table;
    clear: both;
  }
`
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