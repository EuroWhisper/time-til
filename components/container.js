import styled, { css } from 'styled-components';

// Generic 1280px wide centered container.
// Optional 'darkBackground' prop adds a grey background.
const Container = styled.section`
  box-sizing: border-box;
  padding: 8px;
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${props => props.darkBackground && css `
    background-color: #E2E2E2;
  `}

  @media(min-width: 769px) {
    padding: 0;
  }
`;

export default Container;