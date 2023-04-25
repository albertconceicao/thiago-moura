import { ReactNode } from 'react';

import { Container, TextContainer } from './styles';

interface ProjectHeroProps {
  title: string;
  text: string;
  children: ReactNode;
}

export function ProjectHero({ title, text, children }: ProjectHeroProps) {
  return (
    <Container>
      <div className="container">
        <TextContainer>
          <h1>{title}</h1>
          <p>{text}</p>
        </TextContainer>
        {children}
      </div>
    </Container>
  );
}
