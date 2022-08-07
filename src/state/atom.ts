import {atom} from 'recoil';

export const languageAtom = atom<string>({
  key: 'language',
  default: 'en',
});