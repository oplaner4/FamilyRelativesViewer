import { Relative } from "./relative";
import { HumanSex } from "./humanSex";

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

export const RelativeSex : Record<number, HumanSex> = {};
RelativeSex[Relative.Father] = HumanSex.Male;
RelativeSex[Relative.Mother] = HumanSex.Female;
RelativeSex[Relative.Brother] = HumanSex.Male;
RelativeSex[Relative.Sister] = HumanSex.Female;
RelativeSex[Relative.Uncle] = HumanSex.Male;
RelativeSex[Relative.Aunt] = HumanSex.Female;
RelativeSex[Relative.Grandfather] = HumanSex.Male;
RelativeSex[Relative.Grandmother] = HumanSex.Female;
RelativeSex[Relative.Cousinmale] = HumanSex.Male;
RelativeSex[Relative.Cousinfemale] = HumanSex.Female;
RelativeSex[Relative.Husband] = HumanSex.Male;
RelativeSex[Relative.Wife] = HumanSex.Female;
RelativeSex[Relative.Son] = HumanSex.Male;
RelativeSex[Relative.Daughter] = HumanSex.Female;
RelativeSex[Relative.Nephew] = HumanSex.Male;
RelativeSex[Relative.Niece] = HumanSex.Female;
RelativeSex[Relative.Grandson] = HumanSex.Male;
RelativeSex[Relative.Grandaughter] = HumanSex.Female;
RelativeSex[Relative.Greatgrandfather] = HumanSex.Male;
RelativeSex[Relative.Greatgrandmother] = HumanSex.Female;
RelativeSex[Relative.Greatgrandson] = HumanSex.Male;
RelativeSex[Relative.Greatgranddaughter] = HumanSex.Female;