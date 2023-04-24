import { Container, Navbar } from './styles';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import { NavItem } from './NavItem';
import Link from 'next/link';
import { Button, Icon, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { GiHamburgerMenu } from 'react-icons/gi';
export function Header() {

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false
  })
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container>
      {isMobileVersion ? 
      (
        <>
         <Link href='/'>
            <Image src={Logo} alt='Logotipo Thiago Moura'/>
          </Link>
          <Button onClick={onOpen} bg='white'>
            <Icon as={GiHamburgerMenu} fontSize={30}/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent p='12px 0 0 0'>
             
              <Navbar>
                <NavItem title='Projetos' path='/projects' />
                <NavItem title='Currículo' path='/curriculo' />
                <NavItem title='Sobre' path='/sobre' />
                <NavItem title='Contato' path='/contato' />
              </Navbar>
              <DrawerCloseButton />

              <DrawerBody>
              </DrawerBody>

              
            </DrawerContent>
          </Drawer>
        </>
      ) 
      : 
      (
        <>
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
        </>
        )}
    </Container>
  );
}
