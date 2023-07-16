import styled from 'styled-components';

const ClientsArea = styled.section`
  background-color: #f7fafa;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 50px;
  }

  .container {
    border-top: 1px solid #e1e0eb;
    text-align: center;
  }

  h4 {
    margin: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    letter-spacing: -0.015em;
    color: #696871;
    background-color: #f7fafa;
    display: inline-block;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    top: -15px;
  }

  .imageWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    margin-top: 45px;

    @media (max-width: 851px) {
      justify-content: center;
      margin-top: 25px;
    }
  }

  .client-image-wrapper {
    cursor: pointer;
    margin: 0 10px;

    &:hover {
      animation: var(--wobbleVertical);
    }
  }
`;

export default ClientsArea;
