import { Container, Navbar } from './styles';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import { NavItem } from './NavItem';
import Link from 'next/link';
export function Header() {
  return (
    <Container>
      <Link href='/'>
        <Image src={Logo} alt='Logotipo Thiago Moura'/>
      </Link>

      <Navbar>
        <NavItem title='Projetos' path='/projects' />
        <NavItem title='Currículo' path='/curriculo' />
        <NavItem title='Sobre' path='/sobre' />
        <NavItem title='Contato' path='/contato' />
      </Navbar>
      <div></div>
    </Container>
  );
}
