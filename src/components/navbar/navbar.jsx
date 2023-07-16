import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs' // Importando o ícone do carrinho de compras
import Logo from '@/components/logo/logo' // Importando o logotipo
import Input from '@/components/forms/input/input'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullwidth/>
            </div>
            <BsCart4 size={40} />
        </nav>
    )
}