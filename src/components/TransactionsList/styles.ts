import styled from 'styled-components';

export const Container = styled.article`
  width: 50%;
  margin: 0 auto;
  margin-top: 2.6em;

  @media (max-width: 767px) {
    width: 96% !important;
  }
`;

export const TransactionListItem = styled.section`
  border: var(--border-gray-light);
  border-radius: var(--border-radius-default);
  margin: 1em 0;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border: 2px solid var(--gray);
    border-radius: 50%;
    width: 3.5em;
  }

  span {
    font-weight: 500;
  }

  section {
    display: flex;
    flex-direction: column;

    strong {
      color: var(--gray-dark);
    }

    small {
      color: var(--gray);
    }

    .out {
      color: #c41717f0;

      &:before {
        content: '-';
      }
    }
  }
`;
