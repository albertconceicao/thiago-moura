import Image from 'next/image';
import { Container, HeroText } from './styles';
import Profile from '../../assets/profile.png';

export function Hero() {
  return (
    <Container>
      <HeroText>
        <h1>Olá sou Thiago</h1>
        <h3>UX/UI Designer</h3>

        <p>
          Com uma abordagem centrada no usuário, transformo desafios em oportunidades de design inovador.
        </p>
        
        <button className="standard">Veja meus projetos</button>
      </HeroText>

      <Image src={Profile} alt="Foto de Thiago Moura"/>
    </Container>
  );
}
