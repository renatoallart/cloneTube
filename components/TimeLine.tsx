import { StyledTimeline } from "../styles/TimeLine";

interface IProps {
  title: string;
  url: string;
  thumb: string;
}
interface IIndexSignature {
  [key: string]: IProps[];
}

interface ITimeLineProps {
  playList: IIndexSignature;
}

export function TimeLine({ playList }: ITimeLineProps) {
  const KeyNames = Object.keys(playList);
  console.log(KeyNames);

  return (
    <StyledTimeline>
      {KeyNames.map((name) => {
        const video = playList[name];
        console.log(name, video);
        return (
          <section>
            <h2>{name}</h2>
            <div>
              {video.map((item) => {
                return (
                  <a href={item.url}>
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
