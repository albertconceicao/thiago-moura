import Logo from '../../assets/footer-logo.svg';
import Linkedin from '../../assets/LinkedIn.svg';
import { Container, FooterContent} from './styles';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <Container>
      <FooterContent className='container'>

       <Image src={Logo} alt='Logo' />
        <div className="line"></div>
        <h3>mourathi.silva@gmail.com</h3>
        <Link href='#' target='_blank'>
          <Image src={Linkedin} alt='Link para LinkedIn' />
        </Link>
      </FooterContent>
    </Container>
  );
}
