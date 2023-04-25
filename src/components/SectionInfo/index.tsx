import { ReactNode } from 'react';

import { Container, TextContainer } from './styles';

interface SectionInfoProps {
  title: string;
  text?: string;
  children?: ReactNode;
  img?: ReactNode;
}

export function SectionInfo({ title, text, children, img }: SectionInfoProps) {
  return (
    <Container className='container'>
      <TextContainer>
        <div>
          <strong>{title}</strong>
          <div className="line"></div>
        </div>
        <div>
          <p>{text}</p>
          <div className='children'>
            {children}
          </div>
        </div>
      </TextContainer>
      {img != undefined && (
        <div className="image">
          {img}
        </div>
      )}
    </Container>
  );
}
