import { useState } from "react";
import config from "../config.json";

interface IPlayList {
  title: string;
  url: string;
  thumb: string;
  id: number;
}

export interface IIndexSignature {
  [key: string]: IPlayList[];
}

export function usePlayList() {
  const [playList, setPlayList] = useState<IIndexSignature>(config.playlist);
  const [search, setSearch] = useState<string>("");

  return { search, playList, setSearch };
}
