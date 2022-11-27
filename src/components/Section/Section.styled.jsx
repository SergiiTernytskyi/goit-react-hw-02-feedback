import styled from 'styled-components';

export const SectionLayout = styled.section`
  padding: 30px 10px;

  border-radius: 12px;
  background-color: #e2ebf3;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Title = styled.title`
  display: block;
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: #728697;
`;
