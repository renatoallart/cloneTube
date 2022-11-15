import styled from "styled-components";

interface IFavoriteImgProps {
  img: string;
  hashtag: string;
}

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    border-radius: 50%;
    padding: 4px;
    height: 90px;
    width: 90px;
  }
  .hashtag {
    font-size: 18px;
    font-weight: bold;
  }
`;

export function FavoriteImg({ img, hashtag }: IFavoriteImgProps) {
  return (
    <StyledDescription>
      <img className="img" src={img} alt={hashtag} />
      <p className="hashtag">{hashtag}</p>
    </StyledDescription>
  );
}
