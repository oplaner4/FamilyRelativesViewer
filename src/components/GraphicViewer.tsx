import { useEffect, useRef, useState } from 'react';
import Tree from 'react-d3-tree';

import { useRecoilValue } from 'recoil';
import { Translation } from '../data/localization/translation';
import { languageAtom } from '../state/atom';

import useWindowDimensions from '../misc/utils';
import { BasicLanguageSetKey } from '../data/localization/set';
import { constructFamilyTree } from '../tree/construct';
import { TreeNode } from '../tree/node';

export type GraphicViewerProps = {
  relatives: Array<number>;
};

export const GraphicViewer = ({relatives}: GraphicViewerProps) => {
  const language = useRecoilValue(languageAtom);
  /*const orgChart = {
    name: 'Family tree',
    orientation: 'vertical',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };
*/

  const [treeWrapperWidth, setTreeWrapperWidth] = useState(0);
  const { width } = useWindowDimensions();

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const current: { offsetWidth: number } = ref.current;
      setTreeWrapperWidth(current.offsetWidth);
    }
  }, [ref.current, width]);

  const root: TreeNode = {
    name: Translation[language].basicSet[BasicLanguageSetKey.TreeRootNode],
    children: [],
    parent: null,
  };

  return (
    <div style={{ width: '100%', height: '60em' }} ref={ref}>
      <Tree
        data={constructFamilyTree(root, language, relatives)}
        orientation="vertical"
        translate={{ x: treeWrapperWidth / 2, y: 40 }}
      />
    </div>
  );
};
