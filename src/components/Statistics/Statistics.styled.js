import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ListBold = styled(List)`
  margin-top: 40px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export { List, ListBold };
