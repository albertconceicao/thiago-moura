import { ReactNode } from 'react';

import { Container } from './styles';
import Image from 'next/image';
import CurriculumImage from '../../assets/curriculo.png';
import ContactImage from '../../assets/contato.png';

interface AlternativeHeroProps {
  alternativePicture?: boolean;
}

export function AlternativeHero({ alternativePicture }: AlternativeHeroProps) {
  return (
    <Container>
      {alternativePicture ? 
      (
        <Image src={ContactImage} width={1440} height={236} alt='Foto de Salvador no Por do Sol'/>

      ) : 
      (
        <Image src={CurriculumImage} width={1440} height={236} alt='Foto de Salvador no Por do Sol'/>
      )}
    </Container>
  );
}
