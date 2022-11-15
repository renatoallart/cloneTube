import config from "../../config.json";
import styled from "styled-components";

const StyledHeader = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="" />
        {/* <h2>{config.name}</h2> */}
      </section>
    </StyledHeader>
  );
}
