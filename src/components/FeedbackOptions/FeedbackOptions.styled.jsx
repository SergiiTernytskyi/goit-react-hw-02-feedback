import styled from 'styled-components';

export const ButtonsList = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const ButtonsItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const Button = styled.button`
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  height: 50px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;

  color: #ffffff;
  background-color: #b1c8dd;
  border: none;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  cursor: pointer;
  transition: color 250ms ease-out, box-shadow 250ms ease-out;

  :hover {
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
    box-shadow: none;
  }

  svg {
    margin-right: 8px;
  }
`;
