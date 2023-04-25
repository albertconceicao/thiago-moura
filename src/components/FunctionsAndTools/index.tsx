import { ReactNode } from 'react';

import { Container } from './styles';

interface FunctionsAndToolsProps {
  functions: string;
  projectDuration?: string;
  children: ReactNode;
}

export function FunctionsAndTools({ functions, projectDuration, children }: FunctionsAndToolsProps) {
  return (
    <Container className='container'>
      <div>
        <strong>Minhas funções</strong>

        <div className='functions'>
          {functions}
        </div>
      </div>
      <div className='tools'>
        <strong>Ferramentas usadas</strong>
        <div>
          {children}
        </div>
      </div>
      {projectDuration?.length != undefined && (
        <div>
          <h1>FunctionsAndTools</h1>
          {projectDuration}
        </div>
      )}
    </Container>
  );
}
