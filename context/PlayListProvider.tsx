import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";
import { IIndexSignature, usePlayList } from "../hooks/usePlayList";

export interface IPlayListContext {
  search: string;
  playList: IIndexSignature;
  setSearch: Dispatch<SetStateAction<string>>;
}

const PlayListContext = createContext<IPlayListContext | null>(null);

export function usePlayListContext() {
  return useContext(PlayListContext);
}

export default function PlayListProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { playList, search, setSearch } = usePlayList();

  return (
    <PlayListContext.Provider value={{ playList, search, setSearch }}>
      {children}
    </PlayListContext.Provider>
  );
}
