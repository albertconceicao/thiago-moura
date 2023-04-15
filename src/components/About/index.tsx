import Link from 'next/link';
import { Container } from './styles';

export function About() {
  return (
    <Container>
      <span>Sobre mim</span>

      <h2>UX/UI Designer</h2>

      <p>
        Estou atualmente explorando novos conhecimentos na área de UI, e colocando em prática tudo que venho aprendendo em cursos e projetos, também sou voluntário na CocriarSe onde estou também aprendendo na prática como funciona uma equipe de Design no mundo real.
        UX/UI Design é uma área pela qual sou apaixonado e busco sempre aprimorar meu conhecimentos nela.
        Se quiser saber mais sobre mim <Link href='/about'>clique aqui.</Link>
      </p>
    </Container>
  );
}
