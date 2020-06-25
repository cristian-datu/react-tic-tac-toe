import { I_Game } from "../typedefs";

const STORAGE_KEY = "TicTacToe-Game-History";

export function load(): I_Game {
  const data = {
    winsX: 0,
    winsO: 0,
    noWins: 0,
    games: []
  };

  if (window.localStorage) {
    try {
      const jsonString = localStorage.getItem(STORAGE_KEY);
      if (jsonString) {
        const jsonData = JSON.parse(jsonString);
        if (jsonData) {
          Object.assign(data, jsonData);
        }
      }
    } catch (e) {}
  }

  return data;
}

export function save(data: I_Game): boolean {
  if (window.localStorage) {
    try {
      const jsonString = JSON.stringify(data);
      localStorage.setItem(STORAGE_KEY, jsonString);
      return true;
    } catch (e) {}
  }
  return false;
}

export function clear(): boolean {
  if (window.localStorage) {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {}
  }
  return false;
}
