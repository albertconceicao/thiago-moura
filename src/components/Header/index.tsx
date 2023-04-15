import { Container, Navbar } from './styles';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import { NavItem } from './NavItem';
export function Header() {
  return (
    <Container>
      <Image src={Logo} alt='Logotipo Thiago Moura'/>

      <Navbar>
        <NavItem title='Projetos' path='/projects' />
        <NavItem title='Currículo' path='/curriculum' />
        <NavItem title='Sobre' path='/about' />
        <NavItem title='Contato' path='/contact' />
      </Navbar>
      <div></div>
    </Container>
  );
}
