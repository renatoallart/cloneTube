import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { TimeLine } from "../components/TimeLine";
import config from "../config.json";
import { CSSReset } from "../styles/CSSReset";

export default function Home() {
  return (
    <>
      <div>
        <CSSReset />
        <Menu />
        <Header />
        <TimeLine playList={config.playlist} />
      </div>
    </>
  );
}
