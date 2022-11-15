import { Menu } from "../components/menu/Menu";
import { TimeLine } from "../components/TimeLine";
import { CSSReset } from "../styles/CSSReset";
import { Footer } from "../components/footer/Footer";
import PlayListProvider from "../context/PlayListProvider";

export default function Home() {
  return (
    <>
      <div>
        <CSSReset />
        <PlayListProvider>
          <Menu />
          <TimeLine />
        </PlayListProvider>
        <Footer />
      </div>
    </>
  );
}
