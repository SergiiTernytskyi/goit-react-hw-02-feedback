import styled from 'styled-components';

export const StatisticsList = styled.ul`
  text-transform: uppercase;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;

  color: #728697;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const MessageList = styled.ul`
  display: flex;
  align-items: ceter;
  justify-content: center;
  list-style: none;
`;

export const Message = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  min-width: 100px;

  color: ${props => {
    switch (props.option) {
      case 'good':
        return '#03ad00';
      case 'neutral':
        return '#fa7600';
      case 'bad':
        return '#ed0f07';
      default:
        throw new Error('Unexpected prop');
    }
  }};

  :not(:last-child) {
    margin-right: 24px;
  }

  svg {
    margin-bottom: 8px;
  }
`;
