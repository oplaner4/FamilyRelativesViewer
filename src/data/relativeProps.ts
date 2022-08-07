import { czLanguageSet } from "./languageSets/cz";
import { enLanguageSet } from "./languageSets/en";
import { Relative } from "./relative";
import { Sex } from "./sex";

export const RelativeNavigation : Record<number, Array<number>> = {};
RelativeNavigation[Relative.FATHER] = [-1];
RelativeNavigation[Relative.MOTHER] = RelativeNavigation[Relative.FATHER];
RelativeNavigation[Relative.BROTHER] = [0];
RelativeNavigation[Relative.SISTER] = RelativeNavigation[Relative.BROTHER];
RelativeNavigation[Relative.UNCLE] = [-1, 0];
RelativeNavigation[Relative.AUNT] = RelativeNavigation[Relative.UNCLE];
RelativeNavigation[Relative.GRANDFATHER] = [-2];
RelativeNavigation[Relative.GRANDMOTHER] = RelativeNavigation[Relative.GRANDFATHER];
RelativeNavigation[Relative.COUSINMALE] = [-1, 0, 1];
RelativeNavigation[Relative.COUSINFEMALE] = RelativeNavigation[Relative.COUSINMALE];
RelativeNavigation[Relative.HUSBAND] = [0];
RelativeNavigation[Relative.WIFE] = RelativeNavigation[Relative.HUSBAND];
RelativeNavigation[Relative.SON] = [1];
RelativeNavigation[Relative.DAUGHTER] = RelativeNavigation[Relative.SON];
RelativeNavigation[Relative.NEPHEW] = [0, 1];
RelativeNavigation[Relative.NIECE] = RelativeNavigation[Relative.NEPHEW];
RelativeNavigation[Relative.GRANDSON] = [2];
RelativeNavigation[Relative.GRANDDAUGHTER] = RelativeNavigation[Relative.GRANDSON];
RelativeNavigation[Relative.GREATGRANDFATHER] = [-3];
RelativeNavigation[Relative.GREATGRANDMOTHER] = RelativeNavigation[Relative.GREATGRANDFATHER];
RelativeNavigation[Relative.GREATGRANDSON] = [3];
RelativeNavigation[Relative.GREATGRANDDAUGHTER] = RelativeNavigation[Relative.GREATGRANDSON];

export const RelativeSex : Record<number, Sex> = {}
RelativeSex[Relative.FATHER] = Sex.MALE;
RelativeSex[Relative.MOTHER] = Sex.FEMALE;
RelativeSex[Relative.BROTHER] = Sex.MALE;
RelativeSex[Relative.SISTER] = Sex.FEMALE;
RelativeSex[Relative.UNCLE] = Sex.MALE;
RelativeSex[Relative.AUNT] = Sex.FEMALE;
RelativeSex[Relative.GRANDFATHER] = Sex.MALE;
RelativeSex[Relative.GRANDMOTHER] = Sex.FEMALE;
RelativeSex[Relative.COUSINMALE] = Sex.MALE;
RelativeSex[Relative.COUSINFEMALE] = Sex.FEMALE;
RelativeSex[Relative.HUSBAND] = Sex.MALE;
RelativeSex[Relative.WIFE] = Sex.FEMALE;
RelativeSex[Relative.SON] = Sex.MALE;
RelativeSex[Relative.DAUGHTER] = Sex.FEMALE;
RelativeSex[Relative.NEPHEW] = Sex.MALE;
RelativeSex[Relative.NIECE] = Sex.FEMALE;
RelativeSex[Relative.GRANDSON] = Sex.MALE;
RelativeSex[Relative.GRANDDAUGHTER] = Sex.FEMALE;
RelativeSex[Relative.GREATGRANDFATHER] = Sex.MALE;
RelativeSex[Relative.GREATGRANDMOTHER] = Sex.FEMALE;
RelativeSex[Relative.GREATGRANDSON] = Sex.MALE;
RelativeSex[Relative.GREATGRANDDAUGHTER] = Sex.FEMALE;

export type RelativeLabelLanguageSet = Record<number, string>;

export const RelativeLabel : Record<string, RelativeLabelLanguageSet> = {
    cz: czLanguageSet,
    en: enLanguageSet,
};