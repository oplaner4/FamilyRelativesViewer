import { czLanguageSet } from "./languages/cz";
import { enLanguageSet } from "./languages/en";
import { LanguageSet } from "./set";

export enum Language {
    En = 0,
    Cz = 1,
};

export const Translation : Record<number, LanguageSet> = {};
Translation[Language.Cz] = czLanguageSet;
Translation[Language.En] = enLanguageSet;