import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px 24px;
  max-width: 1040px;
  margin: 0 auto;
  padding: 12px 20px;
`;
