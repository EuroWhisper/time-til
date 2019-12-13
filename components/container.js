import styled, {css} from 'styled-components';

// Generic 1280px wide centered container.
// Optional 'darkBackground' prop adds a grey background.
const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${props => props.darkBackground && css `
    background-color: #E2E2E2;
  `}
`;

export default Container;