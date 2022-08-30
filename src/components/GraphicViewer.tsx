import { useEffect, useRef, useState } from 'react';
import Tree from 'react-d3-tree';

import { useRecoilValue } from 'recoil';
import { Translation } from '../data/localization/translation';
import { languageAtom } from '../state/atom';

import useWindowDimensions from '../misc/utils';
import { BasicLanguageSetKey } from '../data/localization/set';
import { constructFamilyTree } from '../tree/construct';

export type GraphicViewerProps = {
  relatives: Array<number>;
};

export const GraphicViewer = ({relatives}: GraphicViewerProps) => {
  const language = useRecoilValue(languageAtom);
  const [treeWrapperWidth, setTreeWrapperWidth] = useState(0);
  const { width } = useWindowDimensions();

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const current: { offsetWidth: number } = ref.current;
      setTreeWrapperWidth(current.offsetWidth);
    }
  }, [ref.current, width]);

  const root = {
    name: Translation[language].basicSet[BasicLanguageSetKey.TreeRootNode],
    children: [],
    parent: null,
    attributes: {},
  };

  constructFamilyTree(root, language, relatives);

  return (
    <div style={{ width: '100%', height: '60em' }} ref={ref}>
      <Tree
        data={root}
        orientation="vertical"
        translate={{ x: treeWrapperWidth / 2, y: 40 }}
      />
    </div>
  );
};
