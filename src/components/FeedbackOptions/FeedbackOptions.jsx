import PropTypes from 'prop-types';
import { ButtonsFeedback, Button } from './FeedbackOptions.styled';
import { ImHappy, ImWondering, ImAngry } from 'react-icons/im';

const icons = [
  <ImHappy style={{ color: 'green' }} />,
  <ImWondering style={{ color: 'rgba(34, 193, 195, 1)' }} />,
  <ImAngry style={{ color: 'red' }} />,
];

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonsFeedback>
        {options.map((option, idx) => {
          return (
            <li key={option}>
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                <>
                  {icons[idx]}
                  {option}
                </>
              </Button>
            </li>
          );
        })}
      </ButtonsFeedback>
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
