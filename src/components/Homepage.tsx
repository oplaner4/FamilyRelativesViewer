import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { RelativesChooserRow, defaultRelative } from './RelativesChooserRow';
import { GraphicViewer } from './GraphicViewer';

export const Homepage = () => {
  const [relatives, setRelatives] = useState<Array<number>>([defaultRelative]);

  return (
    <Container className="p-4">
      <h1 className="mb-5">Family relatives viewer</h1>
      <RelativesChooserRow relatives={relatives} onChange={(relatives: Array<number>) => {
        setRelatives(relatives);
      }} />
      <GraphicViewer relatives={relatives} />
    </Container>
  );
};
