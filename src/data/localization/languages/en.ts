import { Relative } from '../../relative';
import { BasicLanguageSet, BasicLanguageSetKey, LanguageSet, RelativeLanguageSet } from '../set';

const basicLanguageSet: BasicLanguageSet  = {};
basicLanguageSet[BasicLanguageSetKey.Me] = 'Me';
basicLanguageSet[BasicLanguageSetKey.Parent] = 'Parent';
basicLanguageSet[BasicLanguageSetKey.Sibling] = 'Sibling';
basicLanguageSet[BasicLanguageSetKey.Child] = 'Child';
basicLanguageSet[BasicLanguageSetKey.Viewer] = 'Family relatives viewer';
basicLanguageSet[BasicLanguageSetKey.Remove] = 'Remove';
basicLanguageSet[BasicLanguageSetKey.Add] = 'Add';
basicLanguageSet[BasicLanguageSetKey.AddTitle] = 'Add relative';
basicLanguageSet[BasicLanguageSetKey.Of] = 'Of';
basicLanguageSet[BasicLanguageSetKey.TreeRootNode] = 'Family tree';

const relativesLanguageSet: RelativeLanguageSet  = {};
relativesLanguageSet[Relative.Father] = 'Father';
relativesLanguageSet[Relative.Mother] = 'Mother';
relativesLanguageSet[Relative.Brother] = 'Brother';
relativesLanguageSet[Relative.Sister] = 'Sister';
relativesLanguageSet[Relative.Uncle] = 'Uncle';
relativesLanguageSet[Relative.Aunt] = 'Aunt';
relativesLanguageSet[Relative.Grandfather] = 'Grandfather';
relativesLanguageSet[Relative.Grandmother] = 'Grandmother';
relativesLanguageSet[Relative.Cousinmale] = 'Cousin (male)';
relativesLanguageSet[Relative.Cousinfemale] = 'Cousin (female)';
relativesLanguageSet[Relative.Husband] = 'Husband';
relativesLanguageSet[Relative.Wife] = 'Wife';
relativesLanguageSet[Relative.Son] = 'Son';
relativesLanguageSet[Relative.Daughter] = 'Daughter';
relativesLanguageSet[Relative.Nephew] = 'Nephew';
relativesLanguageSet[Relative.Niece] = 'Niece';
relativesLanguageSet[Relative.Grandson] = 'Grandson';
relativesLanguageSet[Relative.Grandaughter] = 'Grandaughter';
relativesLanguageSet[Relative.Greatgrandfather] = 'Greatgrandfather';
relativesLanguageSet[Relative.Greatgrandmother] = 'Greatgrandmother';
relativesLanguageSet[Relative.Greatgrandson] = 'Greatgrandson';
relativesLanguageSet[Relative.Greatgranddaughter] = 'Greatgranddaughter';

export const enLanguageSet: LanguageSet = {
    basicSet: basicLanguageSet,
    relativeSet: relativesLanguageSet,
};