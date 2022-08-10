export interface TreeNode {
    name: string,
    children: Array<TreeNode>,
    parent: TreeNode | null,
};