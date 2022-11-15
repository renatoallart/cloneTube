import styled from "styled-components";
import { usePlayListContext } from "../context/PlayListProvider";

// interface IProps {
//   title: string;
//   url: string;
//   thumb: string;
//   id: number;
// }
// interface IIndexSignature {
//   [key: string]: IProps[];
// }
// interface ITimeLineProps {
//   playList: IIndexSignature;
// }

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 70px;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export function TimeLine() {
  const { playList, search } = usePlayListContext();
  const KeyNames = Object.keys(playList);

  return (
    <StyledTimeline>
      {KeyNames.map((name) => {
        const videos = playList[name];
        return (
          <section key={name}>
            <h2>{name}</h2>
            <div>
              {videos
                .filter((video) =>
                  video.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => {
                  return (
                    <a key={item.id} href={item.url}>
                      <img src={item.thumb} alt={item.title} />
                      <span>{item.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

// other way
// interface IProps {
//   title: string;
//   url: string;
//   thumb: string;
// }

// interface IIndexSignature {
//   [key: string]: IProps[];
// }

// interface ITimeLineProps {
//   playList: IIndexSignature;
// }

// export function TimeLine({ playList }: ITimeLineProps) {
//   return (
//     <div className="">
//       {Object.entries(playList).map((item) => {
//         return (
//           <section className="p-4 " key={item[0]}>
//             <h2 className="text-3xl">{item[0]}</h2>
//             <div className=" flex gap-2">
//               {item[1].map((video) => {
//                 return (
//                   <a key={video.url} href={video.url}>
//                     <img className="w-[210px] h-[185]" src={video.thumb} />
//                     <span>
//                       {video.title
//                         .split(" ")
//                         .slice(0, 4)
//                         .join()
//                         .replaceAll(",", " ")}
//                       ...
//                     </span>
//                   </a>
//                 );
//               })}
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );

// another way
// return (
//   <div>
//     <div>
//       <h3>Games</h3>
//       {games.map((game) => (
//         <a key={game.url} href={game.url}>
//           <img src={game.thumbnail} alt={game.title} />{" "}
//         </a>
//       ))}
//     </div>
//     <div>
//       <h3>front End</h3>
//       {frontEnd.map((game) => (
//         <a key={game.url} href={game.url}>
//           <img src={game.thumbnail} alt={game.title} />{" "}
//         </a>
//       ))}
//     </div>
//   </div>
// );
// }
