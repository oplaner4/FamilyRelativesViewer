import {atom} from 'recoil';
import { Language } from '../data/localization/translation';

export const languageAtom = atom<Language>({
  key: 'language',
  default: Language.En,
});