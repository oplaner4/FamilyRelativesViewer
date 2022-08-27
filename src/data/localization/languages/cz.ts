import { Relative } from '../../relative';
import { BasicLanguageSet, BasicLanguageSetKey, LanguageSet, RelativeLanguageSet } from '../set';

const basicLanguageSet: BasicLanguageSet  = {};
basicLanguageSet[BasicLanguageSetKey.Me] = 'Já';
basicLanguageSet[BasicLanguageSetKey.Parent] = 'Rodič';
basicLanguageSet[BasicLanguageSetKey.Sibling] = 'Sourozenec';
basicLanguageSet[BasicLanguageSetKey.Child] = 'Dítě';
basicLanguageSet[BasicLanguageSetKey.Viewer] = 'Znázornění rodinných vazeb';
basicLanguageSet[BasicLanguageSetKey.Remove] = 'Odstranit';
basicLanguageSet[BasicLanguageSetKey.Add] = 'Přidat';
basicLanguageSet[BasicLanguageSetKey.AddTitle] = 'Přidat rodinnou vazbu';
basicLanguageSet[BasicLanguageSetKey.Of] = 'Od';
basicLanguageSet[BasicLanguageSetKey.TreeRootNode] = 'Rodokmen';
basicLanguageSet[BasicLanguageSetKey.Order] = 'Pořadí';

const relativesLanguageSet: RelativeLanguageSet  = {};
relativesLanguageSet[Relative.Father] = 'Otec';
relativesLanguageSet[Relative.Mother] = 'Matka';
relativesLanguageSet[Relative.Brother] = 'Bratr';
relativesLanguageSet[Relative.Sister] = 'Sestra';
relativesLanguageSet[Relative.Uncle] = 'Strýc';
relativesLanguageSet[Relative.Aunt] = 'Teta';
relativesLanguageSet[Relative.Grandfather] = 'Dědeček';
relativesLanguageSet[Relative.Grandmother] = 'Babička';
relativesLanguageSet[Relative.Cousinmale] = 'Bratranec';
relativesLanguageSet[Relative.Cousinfemale] = 'Sestřenice';
relativesLanguageSet[Relative.Husband] = 'Manžel';
relativesLanguageSet[Relative.Wife] = 'Manželka';
relativesLanguageSet[Relative.Son] = 'Syn';
relativesLanguageSet[Relative.Daughter] = 'Dcera';
relativesLanguageSet[Relative.Nephew] = 'Synovec';
relativesLanguageSet[Relative.Niece] = 'Neteř';
relativesLanguageSet[Relative.Grandson] = 'Vnuk';
relativesLanguageSet[Relative.Grandaughter] = 'Vnučka';
relativesLanguageSet[Relative.Greatgrandfather] = 'Pradědeček';
relativesLanguageSet[Relative.Greatgrandmother] = 'Prababička';
relativesLanguageSet[Relative.Greatgrandson] = 'Pravnuk';
relativesLanguageSet[Relative.Greatgranddaughter] = 'Pravnučka';

export const czLanguageSet: LanguageSet = {
    basicSet: basicLanguageSet,
    relativeSet: relativesLanguageSet,
};