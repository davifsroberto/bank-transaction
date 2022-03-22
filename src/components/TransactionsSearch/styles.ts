import styled from 'styled-components';

export const Container = styled.section`
  border: var(--border-gray-light);
  border-radius: var(--border-radius-default);
  width: 60%;
  margin: 0 auto;
  padding: 1.5em;
  margin-top: 1.3em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 96% !important;
  }
`;

export const Input = styled.input`
  border: var(--border-gray-light);
  border-radius: var(--border-radius-default);
  padding: 0.8em;
  width: 67%;

  &::placeholder {
    color: #c3cfd9;
  }
`;

export const Select = styled.select`
  border: var(--border-gray-light);
  border-radius: var(--border-radius-default);
  width: 30%;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
`;
