import styled from 'styled-components'
import { fontStyles } from 'assets/styles/fontStyles'
import { breakpoints } from 'assets/styles/media'

export const Tag = styled.div`
  border-radius: 6px;
  color: #333;
  ${fontStyles.label2};
  padding: 5px 10px 4px;
  background: rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.18);
  }

  ${breakpoints.desktop} {
    ${fontStyles.label1};
    padding: 6px 16px 5px;
  }
`
