import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectHero } from '@/components/ProjectHero'
import Calmse from '../assets/calmse-projeto.png';
import Figma from '../assets/figma.svg';
import GoogleDrive from '../assets/drive.svg';
import GoogleDocs from '../assets/docs.svg';
import Image from 'next/image';
import { FunctionsAndTools } from '@/components/FunctionsAndTools';
import { SectionInfo } from '@/components/SectionInfo';
import Diagrama from '../assets//project1/diagrama-afinidade.png';
import Persona from '../assets//project1/Persona 1.png';
import UserFlow from '../assets//project1/user-flow.png';
import Mapa from '../assets//project1/jornada-usuario.png';
export default function Home() {
  return (
    <>
    
      <div className='container'>
        <Head>
          <title>Thiago Moura | Calmse</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Header />
      </div>
        <ProjectHero title='CalmSe' text='O CalmSe é um aplicativo pensado para pessoas que passam por problemas de ansiedade e depressão, com ferramentas para marcação de sessões com psicólogos, respiração, conteúdos sobre esses assuntos, tudo pensado para ajudar o usuário a se sentir melhor de alguma forma.'>
          <Image src={Calmse} alt='Foto no celular do projeto Calmse' />
        </ProjectHero>
        <FunctionsAndTools functions='UX Designer . UI Designer . UX Reserarcher'>
            <Image src={Figma} alt ='Logotipo do Figma'/>
            <Image src={GoogleDrive} alt ='Logotipo do GoogleDrive'/>
            <Image src={GoogleDocs} alt ='Logotipo do GoogleDocs'/>
        </FunctionsAndTools>
        <SectionInfo title='Desafio e problemas' text='Todos os dias, cerca de 30 brasileiros se suicidam e mais de 700 mil pessoas se suicidam anualmente, esses dados foram realmente assustadores para mim, que como foi falado acima foi mais um motivador para dar continuidade ao projeto e buscar conhecer um pouco mais dos usuários que passam por isso em algum grau.'/>
        <SectionInfo title='Pesquisas' text='E então dei início ao projeto realizando uma desk research com o objetivo de descobrir funções que são bastante usadas pelos usuários e efetivas para melhorar ansiedade e depressão, também descobrir quais são as atuais dificuldades que essas pessoas estão enfrentando no meio digital para evitar esses problemas. Pude visitar a playstore na parte dos comentários e obtive as seguintes descobertas:'>
          <ol>
            <li>Aumentar o número de contatos de emergência, pois a pessoa contactada pode demorar um pouco a ver se é emergência e esperar pode ser fatal. Ter a opção de cadastrar 3 pessoas ou mais seria o ideal.</li>
            <li>Fazer compilação de conselhos de psicólogos para dúvidas / problemas comuns e indicação de número de telefone e/ou endereço de pronto-socorros psiquiátricos.</li>
            <li>Ter uma função no app de disparar mensagens
            (escolhidas / avaliadas por especialistas) assim que perceber tentativas de ligação ao CVV</li>
            <li>Exercício para controle de ansiedade</li>
            <li>Opção de edição no diário de gratidão</li>
          </ol>
        </SectionInfo>
        <SectionInfo title='Benchmarking' text='Também realizei um benchmarking para descobrir pontos fortes e fracos de aplicativos que já estavam no mercado'/>
        <SectionInfo title='Pesquisas quantitativas' text='Iniciei realizando pesquisas quantitativas criando um formulário que pude lançar no Linkedin, instagram, grupos do whatsapp e facebook.'/>
        <SectionInfo title='Entrevistas em profundidade' text='Após pesquisas quantitativas coletei o contato desses usuários e 3 pessoas estavam dispostas a conversar, e então as chamei para conversar um pouco mais sobre o assunto e entender como esse problema e suas resoluções funcionam na cabeça delas, e como elas usam a tecnologia ao favor delas, e o que realmente não funciona.'>
          <ul>
            <li><strong>“Me considero ansioso e sinto ansiedade praticamente todos os dias.”</strong></li>
            <div className="secondaryLine"></div>
            <li><strong>“Eu já senti muita curiosidade de baixar apps contra ansiedade, mas nunca durava muito tempo com eles.”</strong></li>
              <div className="secondaryLine"></div>
            <li><strong>“Não uso nenhum app contra ansiedade, mas me ajuda quando assisto vídeo de meditação no youtube.”</strong></li>
              <div className="secondaryLine"></div>
            <li><strong>“Exercício é uma atividade que ajuda a diminuir a ansiedade.”</strong></li>
              <div className="secondaryLine"></div>
            <li><strong>“Eu gosto de me recolher quando tenho crises para sentir emoções e depois resolver o problema”</strong></li>
            <div className="secondaryLine"></div>
          </ul>
        </SectionInfo>
        <SectionInfo title='Coleta de dados' text='Após as entrevistas separei em um diagrama de afinidade os assuntos mais relevantes que foram tratados.' img={<Image src={Diagrama} alt='Diagrama afinidade' width={1007} height={538}/>}/>
        <SectionInfo title='Persona' text='Após a coleta dos dados, desenvolvi uma persona para me guiar durante todo o processo de Design' img={<Image src={Persona} alt='Persona que ajudou na coleta de dados' width={855} height={455}/>}/>
        <SectionInfo title='User flow'  img={<Image src={UserFlow} alt='Flow do usuário' width={964} height={604}/>}/>
        <SectionInfo title='Mapa de jornada do usuário'  img={<Image src={Mapa} alt='Mapa de jornada' width={898} height={696}/>}/>
          
      <Footer />
    </>
  )
}
