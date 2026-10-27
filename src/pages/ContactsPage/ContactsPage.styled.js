import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const Count = styled.span`
  margin-left: 8px;
  padding: 2px 10px;
  font-size: 14px;
  color: var(--primary);
  background: var(--primary-soft);
  border-radius: 999px;
`;
