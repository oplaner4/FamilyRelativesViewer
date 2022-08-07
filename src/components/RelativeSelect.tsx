import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { Relative } from '../data/relative';
import { RelativeLabel } from '../data/relativeProps';
import { languageAtom } from '../state/atom';

export type RelativeSelectProps = {
  selected: number;
  onChange: (rel: number) => void;
};

export const RelativeSelect = ({onChange, selected}: RelativeSelectProps) => {
  const language = useRecoilValue(languageAtom);
  return (
    <Form.Select
      defaultValue={selected}
      aria-label="Select relative"
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        onChange(Number(e.target.value));
      }}
    >
        {Object.keys(Relative).filter(rel => !isNaN(Number(rel))).map(rel => {
          const relIndex = Number(rel);
          return <option key={rel} value={rel}>
            {RelativeLabel[language][relIndex]}
          </option>
        })}
    </Form.Select>
  );
};
