import {atom} from 'recoil';
import {Song} from '../types';

export const songsListAtom = atom<Song[]>({
  key: 'songsList',
  default: [],
});

export const songsInQueueListAtom = atom<Song[]>({
  key: 'songsInQueueList',
  default: [],
});

export const showSongsInQueueAtom = atom<boolean>({
  key: 'showSongsInQueue',
  default: false,
});

export const songsPlayedAtom = atom<number>({
  key: 'songsPlayed',
  default: 0,
});
