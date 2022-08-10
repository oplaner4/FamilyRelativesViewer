import { ChangeEvent, useState } from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import { RelativesChooserRow, defaultRelative } from './RelativesChooserRow';
import { GraphicViewer } from './GraphicViewer';
import { useRecoilState } from 'recoil';
import { Language, Translation } from '../data/localization/translation';
import { languageAtom } from '../state/atom';
import { BasicLanguageSetKey } from '../data/localization/set';

export const Homepage = () => {
  const [relatives, setRelatives] = useState<Array<number>>([defaultRelative]);
  const [language, setLanguage] = useRecoilState(languageAtom);

  return (
    <Container className="p-4">
      <Row className="mb-5 align-items-center justify-content-center justify-content-md-start">
        <Col xs={12} sm={9} md={10} xl={11}>
          <h1 className="text-center text-md-start">{Translation[language].basicSet[BasicLanguageSetKey.Viewer]}</h1>
        </Col>
        <Col xs={4} sm={3} md={2} xl={1}>
          <Form.Select
            defaultValue={language}
            aria-label="Select relative"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setLanguage(Number(e.target.value));
            }}
          >
            {Object.keys(Language).filter(lang => !isNaN(Number(lang))).map(lang => {
              const langIndex = Number(lang);
              return <option key={lang} value={lang}>
                {Language[langIndex]}
              </option>
            })}
          </Form.Select>
        </Col>
      </Row>
      
      <RelativesChooserRow relatives={relatives} onChange={(relatives: Array<number>) => {
        setRelatives(relatives);
      }} />
      <GraphicViewer relatives={relatives} />
    </Container>
  );
};
