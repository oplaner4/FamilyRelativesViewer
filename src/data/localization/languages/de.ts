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
relativesLanguageSet[Relative.Father] = 'der Vater';
relativesLanguageSet[Relative.Mother] = 'die Mutter';
relativesLanguageSet[Relative.Brother] = 'der Bruder';
relativesLanguageSet[Relative.Sister] = 'die Schwerster';
relativesLanguageSet[Relative.Uncle] = 'der Onkel';
relativesLanguageSet[Relative.Aunt] = 'die Tante';
relativesLanguageSet[Relative.Grandfather] = 'der Großvater';
relativesLanguageSet[Relative.Grandmother] = 'die Großmutter';
relativesLanguageSet[Relative.Cousinmale] = 'der Cousin';
relativesLanguageSet[Relative.Cousinfemale] = 'die Cousine';
relativesLanguageSet[Relative.Husband] = 'der Ehemann';
relativesLanguageSet[Relative.Wife] = 'die Ehefrau';
relativesLanguageSet[Relative.Son] = 'der Sohn';
relativesLanguageSet[Relative.Daughter] = 'die Tochter';
relativesLanguageSet[Relative.Nephew] = 'der Neffe';
relativesLanguageSet[Relative.Niece] = 'die Nichte';
relativesLanguageSet[Relative.Grandson] = 'der Enkel';
relativesLanguageSet[Relative.Grandaughter] = 'die Enkelin';
relativesLanguageSet[Relative.Greatgrandfather] = 'der Urgroßvater';
relativesLanguageSet[Relative.Greatgrandmother] = 'die Urgroßmutter';
relativesLanguageSet[Relative.Greatgrandson] = 'der Urenkel';
relativesLanguageSet[Relative.Greatgranddaughter] = 'die Urenkelin';

export const deLanguageSet: LanguageSet = {
    basicSet: basicLanguageSet,
    relativeSet: relativesLanguageSet,
};