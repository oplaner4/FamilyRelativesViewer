import { useEffect, useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import { useRecoilValue } from 'recoil';
import { RelativeDirection, RelativeLabel, RelativeNavigation } from '../data/relativeProps';
import { languageAtom } from '../state/atom';

export type GraphicViewerProps = {
  relatives: Array<number>;
};

interface Node {
  name: string,
  children: Array<Node>,
  parent: Node | null,
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

  const me: Node = {
    name: 'Me',
    children: [],
    parent: null,
  };

  let actual = me;
  let root = me;

  relatives.forEach((_, relIndex: number) => {
    const rel = relatives[relatives.length - 1 - relIndex];
    const navigation = RelativeNavigation[rel];

    navigation.forEach((direction: number, dirIndex: number) => {
      const last = dirIndex === navigation.length - 1;

      if (direction === RelativeDirection.SIBLING) {
        if (actual.parent === null) {
          actual.parent = {
            name: 'Parent',
            children: [actual],
            parent: null,
          };

          root = actual.parent;
        }

        const sibling = {
          name: last ? RelativeLabel[language][rel] : 'Sibling',
          children: [],
          parent: actual.parent,
        };

        actual.parent.children.push(sibling);
        actual = sibling;
      }

      else if (direction === RelativeDirection.PARENT) {
        if (actual.parent === null) {
          actual.parent = {
            name: 'Parent',
            children: [actual],
            parent: null,
          };
        }

        if (last) {
          actual.parent.name = RelativeLabel[language][rel];
        }

        root = actual.parent;
        actual = actual.parent;
      }

      else if (direction === RelativeDirection.CHILD) {
        const child = {
          name: last ? RelativeLabel[language][rel] : 'Child',
          children: [],
          parent: actual,
        };

        actual.children.push(child);
        actual = child;
      }
    });
  });

  const [w, setW] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setW(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div style={{ width: '100%', height: '60em' }} ref={ref}>
      <Tree data={root} orientation="vertical" translate={{ x: w / 2, y: 40 }} />
    </div>
  );
};
