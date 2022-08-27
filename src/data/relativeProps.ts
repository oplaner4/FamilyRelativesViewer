import { Relative } from "./relative";

export enum DirectRelationship {
    Sibling = 0,
    Parent = -1,
    Child = 1,
    Partner = 2,
};

export const RelativeNavigation : Record<number, Array<number>> = {};
RelativeNavigation[Relative.Father] = [DirectRelationship.Parent];
RelativeNavigation[Relative.Mother] = RelativeNavigation[Relative.Father];
RelativeNavigation[Relative.Brother] = [DirectRelationship.Sibling];
RelativeNavigation[Relative.Sister] = RelativeNavigation[Relative.Brother];
RelativeNavigation[Relative.Uncle] = [DirectRelationship.Parent, DirectRelationship.Sibling];
RelativeNavigation[Relative.Aunt] = RelativeNavigation[Relative.Uncle];
RelativeNavigation[Relative.Grandfather] = [DirectRelationship.Parent, DirectRelationship.Parent];
RelativeNavigation[Relative.Grandmother] = RelativeNavigation[Relative.Grandfather];
RelativeNavigation[Relative.Cousinmale] = [
    DirectRelationship.Parent, DirectRelationship.Sibling, DirectRelationship.Child
];
RelativeNavigation[Relative.Cousinfemale] = RelativeNavigation[Relative.Cousinmale];
RelativeNavigation[Relative.Husband] = [DirectRelationship.Partner];
RelativeNavigation[Relative.Wife] = RelativeNavigation[Relative.Husband];
RelativeNavigation[Relative.Son] = [DirectRelationship.Child];
RelativeNavigation[Relative.Daughter] = RelativeNavigation[Relative.Son];
RelativeNavigation[Relative.Nephew] = [DirectRelationship.Sibling, DirectRelationship.Child];
RelativeNavigation[Relative.Niece] = RelativeNavigation[Relative.Nephew];
RelativeNavigation[Relative.Grandson] = [DirectRelationship.Child, DirectRelationship.Child];
RelativeNavigation[Relative.Grandaughter] = RelativeNavigation[Relative.Grandson];
RelativeNavigation[Relative.Greatgrandfather] = [DirectRelationship.Parent, DirectRelationship.Parent, DirectRelationship.Parent];
RelativeNavigation[Relative.Greatgrandmother] = RelativeNavigation[Relative.Greatgrandfather];
RelativeNavigation[Relative.Greatgrandson] = [DirectRelationship.Child, DirectRelationship.Child, DirectRelationship.Child];
RelativeNavigation[Relative.Greatgranddaughter] = RelativeNavigation[Relative.Greatgrandson];