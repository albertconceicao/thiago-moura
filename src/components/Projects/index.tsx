import { ProjectItem } from './ProjectItem';
import { Container } from './styles';
const projects = [
  {
    "title": "CalmSe",
    "text": "O CalmSe é um aplicativo pensado para pessoas que passam por problemas de ansiedade e depressão, com ferramentas para marcação de sessões com psicólogos, respiração, conteúdos sobre esses assuntos, tudo pensado para ajudar o usuário a se sentir melhor de alguma forma.",
    "path": "/calmse",
    "imgPath": "/calmse.png",
    "width": 566,
    "height": 425,
  },
  {
    "title": "Instituto Salvador",
    "text": "acompanhar seu progresso como estudante do instituto. Lá eles poderão ver sua frequência, adicionar sua presença nas aulas, ver sua situação para a formatura, acompanhar sua porcentagem de presença nas aulas do instituto etc.",
    "path": "/instituto",
    "imgPath": "/instituto.png",
    "width": 537,
    "height": 423,
  },
  {
    "title": "Square Music",
    "text": "Square music é um aplicativo que permite que usuários além de escutar música, possam achar novas músicas por reconhecimento de voz e sons sem precisar sair do app para outra ferramenta.",
    "path": "/square",
    "imgPath": "/square-music.png",
    "width": 537,
    "height": 423,
  },
  {
    "title": "Smokin’ Grill",
    "text": "O Smokin' Grill é um aplicativo voltado para usuários que trabalham e estudam o dia todo ou apenas pensam em aproveitar momentos com a família e amigos sem gastar muito tempo cozinhando, onde eles podem pedir vários produtos do restaurante como Hambúrgueres, batata frita, etc.",
    "path": "/smokin",
    "imgPath": "/smokin'ngrill.png",
    "width": 537,
    "height": 423,
  },
]

export function Projects() {
  return (
    <Container>
      <h1>Projetos</h1>

      {projects.map(project => (
        <ProjectItem 
        key={project.imgPath}
        img={project.imgPath}
        path={project.path}    
        text={project.text}
        title={project.title}
        width={project.width}	
        height={project.height}
        />
      ))}
    </Container>
  );
}
