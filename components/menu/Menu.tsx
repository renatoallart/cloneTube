import styled from "styled-components";
import { Header } from "./Header";
import { Search } from "./Search";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
`;

export function Menu() {
  return (
    <StyledMenu>
      <Header />
      <Search />
    </StyledMenu>
  );
}
