import {Button, Col, Form, Row, CloseButton  } from 'react-bootstrap';
import { Relative } from '../data/relative';
import { RelativeSelect } from './RelativeSelect';

export type RelativesChooserRowProps = {
  relatives: Array<number>,
  onChange: (relatives: Array<number>) => void;
};

export const defaultRelative = Relative.FATHER;

export const RelativesChooserRow = ({relatives, onChange}: RelativesChooserRowProps) => {
  const onAddRelative = () => {
    const newRelatives = relatives.slice(0);
    newRelatives.push(defaultRelative);
    onChange(newRelatives);
  };

  const onRemoveRelative = (relIndex: number) => {
    onChange(relatives.filter((_, i) => relIndex !== i));
  };

  return (
      <Row>
        {relatives.map((rel, i) =>
          <Col key={i} md={3} className="mb-3">
            <div className="d-flex align-items-center">
              <RelativeSelect key={i} selected={rel} onChange={(candidate: number) => {
                const newRelatives = relatives.slice(0);
                newRelatives[i] = candidate;
                onChange(newRelatives);
              }} />
              {i > 0 ?
                <CloseButton title="Remove" className="ms-2" onClick={() => onRemoveRelative(i)}/>
              : null}
              <b className="ms-4">Of</b>
            </div>
            
          </Col>
        )}
        <Col md={1}>
          <Form.Control type="text" value="Me" readOnly />
        </Col>
        <Col md={1}>
          <Button title="Of another relative" variant="dark" onClick={onAddRelative}>
            Add
          </Button>
        </Col> 
      </Row>
  );
};
