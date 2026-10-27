import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const Name = styled.span`
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PhoneLink = styled.a`
  color: var(--muted);
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: var(--primary);
  }
`;
