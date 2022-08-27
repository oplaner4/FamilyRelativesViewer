export enum BasicLanguageSetKey {
    Me = 0,
    Parent = 1,
    Sibling = 2,
    Child = 3,
    Viewer = 4,
    Remove = 5,
    Add = 6,
    AddTitle = 7,
    Of = 8,
    TreeRootNode = 9,
    Order = 10,
}

export type BasicLanguageSet = Record<number, string>;
export type RelativeLanguageSet = Record<number, string>;

export interface LanguageSet {
    basicSet: BasicLanguageSet,
    relativeSet: RelativeLanguageSet,
};