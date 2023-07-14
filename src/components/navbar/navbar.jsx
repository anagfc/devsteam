import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs' // Importando o ícone do carrinho de compras
import Logo from '@/components/logo/logo' // Importando o logotipo

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <input/>
            <BsCart4 size={40} />
        </nav>
    )
}