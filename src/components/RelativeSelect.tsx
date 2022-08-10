import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { Translation } from '../data/localization/translation';
import { Relative } from '../data/relative';
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
            {Translation[language].relativeSet[relIndex]}
          </option>
        })}
    </Form.Select>
  );
};
