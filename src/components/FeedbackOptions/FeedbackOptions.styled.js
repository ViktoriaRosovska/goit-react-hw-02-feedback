import styled from 'styled-components';

const ButtonsFeedback = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-weight: 300;
  width: 130px;
  height: 50px;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background: linear-gradient(
      0deg,
      rgba(197, 249, 129, 0.394) 0%,
      rgba(34, 193, 195, 1) 100%
    );
    border-radius: 15px;
  }
`;
export { ButtonsFeedback, Button };
