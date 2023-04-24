import { ReactNode } from 'react';

import { Container} from './styles';
import Image from 'next/image';
import LinkedIn from '../../assets/LinkedInBlack.png';
import Link from 'next/link';
export function ContactSection() {
  return (
    <Container>

      <h3>mourathi.silva@gmail.com</h3>

      <p>
      Se você gostou dos meus projetos. e estiver procurando por um profissional experiente em projetos nesta área, não hesite em entrar em contato comigo. Estou aberto a novas oportunidades de trabalho e projetos emocionantes!
      </p>

      <Link href="">
        <Image src={LinkedIn} alt="Link para ir ao LinkedIn"/>
      </Link>

    </Container>
  );
}
