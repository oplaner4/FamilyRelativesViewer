import {Button, Col, Form, Row, CloseButton  } from 'react-bootstrap';
import { Relative } from '../data/relative';
import { RelativeSelect } from './RelativeSelect';
import { useRecoilValue } from 'recoil';
import { Translation } from '../data/localization/translation';
import { languageAtom } from '../state/atom';
import { BasicLanguageSetKey } from '../data/localization/set';

export type RelativesChooserRowProps = {
  relatives: Array<number>,
  onChange: (relatives: Array<number>) => void;
};

export const defaultRelative = Relative.Father;

export const RelativesChooserRow = ({relatives, onChange}: RelativesChooserRowProps) => {
  const language = useRecoilValue(languageAtom);

  const onAddRelative = () => {
    const newRelatives = relatives.slice(0);
    newRelatives.push(defaultRelative);
    onChange(newRelatives);
  };

  const onRemoveRelative = (relIndex: number) => {
    onChange(relatives.filter((_, i) => relIndex !== i));
  };

  return (
      <Row className="justify-content-center justify-content-md-start">
        {relatives.map((rel, i) =>
          <Col key={i} xs={12} sm={7} md={5} lg={4} xl={3} className="mb-3">
            <div className="d-flex align-items-center">
              <RelativeSelect key={i} selected={rel} onChange={(candidate: number) => {
                const newRelatives = relatives.slice(0);
                newRelatives[i] = candidate;
                onChange(newRelatives);
              }} />
              {i > 0 ?
                <CloseButton title={Translation[language].basicSet[BasicLanguageSetKey.Remove]} className="ms-2" onClick={() => onRemoveRelative(i)}/>
              : null}
              <b className="ms-4">{Translation[language].basicSet[BasicLanguageSetKey.Of]}</b>
            </div>
            
          </Col>
        )}
        <Col xs={'auto'} className="mb-3">
          <Button title={Translation[language].basicSet[BasicLanguageSetKey.AddTitle]} variant="dark" onClick={onAddRelative}>
            <i className="bi bi-plus"></i> {Translation[language].basicSet[BasicLanguageSetKey.Add]}
          </Button>
        </Col> 
        <Col xs={4} sm={3} md={2} lg={1} className="mb-3">
          <Form.Control type="text" value={Translation[language].basicSet[BasicLanguageSetKey.Me]} readOnly />
        </Col>
      </Row>
  );
};
