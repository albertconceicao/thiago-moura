import { ReactNode } from 'react';

import { Container, CurriculumText } from './styles';
import Image from 'next/image';
import CurriculumProfile from '../../assets/foto-curriculo.png';
export function AboutSection() {
  return (
    <Container>
      <CurriculumText>

        <h3>Olá, me chamo Thiago e sou de Salvador</h3>

        <p>
          Atualmente estou me especializando em UX/UI com um curso completo na Coursera com certificação do Google e 3 projetos completos demonstrados em portfólio. Sou aluno da Awari, já completei cursos de UX Design e UX Writing, cursando UI Design atualmente. 
          Sempre busco mais conhecimento, não consigo ficar parado sem aprender, gosto muito de escutar e pôr em prática melhoras que são válidas tanto para mim quanto para o time e empresa.
          Trabalho em um time multidisciplinar e multicultural, onde preciso estar sempre me comunicando e expondo minhas ideias a respeito do projeto sendo trabalhado. Tenho habilidades com ferramentas de design como Figma e Adobe XD na criação de protótipos de baixa e alta fidelidade, pesquisas quantitativas e entrevistas em profundidade com os usuários, análise e síntese de dados etc.
        </p>

        <h3>Minha carreira até agora</h3>
        <p>
        Terminei recentemente o curso de UX Writing, e dei início aos meus estudos em UI Design, aprimorando ainda mais meus conhecimentos que já tenho na área.
        Também estou finalizando o projeto voluntário na CocriarSe.

        </p>

      </CurriculumText>
      <Image src={CurriculumProfile} alt='Foto de Thiago Moura na sessão de Currículo' />
    </Container>
  );
}
