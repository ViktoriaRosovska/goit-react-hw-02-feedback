import { SectionContainer, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children, fontWeight, marginbottom }) => {
  return (
    <SectionContainer marginbottom={marginbottom}>
      <Title fontWeight={fontWeight}>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  fontWeigth: PropTypes.string.isRequired,
};
