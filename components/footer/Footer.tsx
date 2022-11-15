import Image from "next/image";
import styled from "styled-components";
import config from "../../config.json";
import { FavoriteImg } from "./FavoriteImg";

const StyledFavorites = styled.div`
  height: 170px;
  width: 100%;
  margin: 4px;
  padding: 4px;

  .title {
    margin-left: 8px;
    font-size: 18px;
    font-weight: bold;
  }
  .favList {
    margin: 4px;
    padding: 8px;
    display: flex;
    gap: 24px;
    flex-grow: 1;
  }
`;

export function Footer() {
  return (
    <StyledFavorites>
      <h2 className="title">Favorites Channels</h2>
      <div className="favList">
        {config.favorites.map((favorite) => (
          <FavoriteImg key={favorite.id} {...favorite} />
        ))}
      </div>
    </StyledFavorites>
  );
}
