import styled from 'styled-components';

export const Span = styled.span`
color: ${({isOrange}) => (isOrange ? 'orange' : 'yellowgreen')};
`;

export const Paragraf = styled.p`
  color: blue;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: green;
  }

  &:hover ${Span} {
    color: yellow;
  }
`;