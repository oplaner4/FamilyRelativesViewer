import { Relative } from '../../relative';
import { BasicLanguageSet, BasicLanguageSetKey, LanguageSet, RelativeLanguageSet } from '../set';

const basicLanguageSet: BasicLanguageSet  = {};
basicLanguageSet[BasicLanguageSetKey.Me] = 'Ich';
basicLanguageSet[BasicLanguageSetKey.Parent] = 'Elternteil';
basicLanguageSet[BasicLanguageSetKey.Sibling] = 'Geschwister';
basicLanguageSet[BasicLanguageSetKey.Child] = 'Kind';
basicLanguageSet[BasicLanguageSetKey.Viewer] = 'Familienmitglieder Viewer';
basicLanguageSet[BasicLanguageSetKey.Remove] = 'Entfernen';
basicLanguageSet[BasicLanguageSetKey.Add] = 'Hinzufügen';
basicLanguageSet[BasicLanguageSetKey.AddTitle] = 'Hinzufügen Familienmitglied';
basicLanguageSet[BasicLanguageSetKey.Of] = 'Von';
basicLanguageSet[BasicLanguageSetKey.TreeRootNode] = 'ein Stammbaum';
basicLanguageSet[BasicLanguageSetKey.Order] = 'Ordnung';

const relativesLanguageSet: RelativeLanguageSet  = {};
relativesLanguageSet[Relative.Father] = 'Vater';
relativesLanguageSet[Relative.Mother] = 'Mutter';
relativesLanguageSet[Relative.Brother] = 'Bruder';
relativesLanguageSet[Relative.Sister] = 'Schwerster';
relativesLanguageSet[Relative.Uncle] = 'Onkel';
relativesLanguageSet[Relative.Aunt] = 'Tante';
relativesLanguageSet[Relative.Grandfather] = 'Großvater';
relativesLanguageSet[Relative.Grandmother] = 'Großmutter';
relativesLanguageSet[Relative.Cousinmale] = 'Cousin';
relativesLanguageSet[Relative.Cousinfemale] = 'Cousine';
relativesLanguageSet[Relative.Husband] = 'Ehemann';
relativesLanguageSet[Relative.Wife] = 'Ehefrau';
relativesLanguageSet[Relative.Son] = 'Sohn';
relativesLanguageSet[Relative.Daughter] = 'Tochter';
relativesLanguageSet[Relative.Nephew] = 'Neffe';
relativesLanguageSet[Relative.Niece] = 'Nichte';
relativesLanguageSet[Relative.Grandson] = 'Enkel';
relativesLanguageSet[Relative.Grandaughter] = 'Enkelin';
relativesLanguageSet[Relative.Greatgrandfather] = 'Urgroßvater';
relativesLanguageSet[Relative.Greatgrandmother] = 'Urgroßmutter';
relativesLanguageSet[Relative.Greatgrandson] = 'Urenkel';
relativesLanguageSet[Relative.Greatgranddaughter] = 'Urenkelin';

export const deLanguageSet: LanguageSet = {
    basicSet: basicLanguageSet,
    relativeSet: relativesLanguageSet,
};