import styled from 'styled-components';

const Title = styled.h2`
  font-size: 40px;
  font-weight: ${props => props.fontWeight};
  text-align: center;
  margin-bottom: 40px;
`;

const SectionContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${props => props.marginbottom};
`;

export { Title, SectionContainer };
