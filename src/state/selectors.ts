import {selector} from 'recoil';
/*import {showSongsInQueueAtom, songsInQueueListAtom, songsListAtom, songsPlayedAtom} from './atom';

export const songsListSelector = selector({
  key: 'songsListSelectorKey',
  get({get}) {
    const list = get(songsListAtom);
    const queueList = get(songsInQueueListAtom);
    const showSongsInQueue = get(showSongsInQueueAtom);

    if (showSongsInQueue) {
      return list;
    }

    return list.filter((song) =>
      queueList.every((queueSong) => queueSong.author !== song.author || queueSong.name !== song.name),
    );
  },
});

export const songsStatsSelector = selector({
  key: 'songsStatsSelectorKey',
  get({get}) {
    const list = get(songsListAtom);
    const queueList = get(songsInQueueListAtom);
    const songsPlayed = get(songsPlayedAtom);

    const result: StatsInfo = {
      totalSongsCount: list.length,
      songsQueuedCount: queueList.length,
      songsPlayedCount: songsPlayed,
      playbackQueuedSeconds: queueList.reduce((acc, song) => acc + song.length, 0),
    };
    return result;
  },
});
*/