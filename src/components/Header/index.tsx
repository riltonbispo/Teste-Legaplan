import logo from '../../../public/logo.png'
import Image from 'next/image'
import '@/styles/header.scss'

/**
  TODO:
  [] Deixar a data e hora dinamico
  [] ver sobre module scss / BEM
 */

const Header = () => {
  return (
    <header className='header'>
      <Image src={logo.src} alt='FocalPoint Logo' width={150} height={36}  className='header__logo'/>
      <h1 className='header__title'>Bem-vindo de volta, Marcus</h1>
      <span className='header__subtitle'>Segunda, 22 de dezembro de 2024</span>
    </header>
  )
}

export default Header