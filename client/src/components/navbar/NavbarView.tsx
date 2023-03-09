import { Navbar, Nav } from 'react-bootstrap';
import NavlinkWithTooltip from './NavlinkWithTooltip';
import './Navbar.scss';

const NavbarView = (): JSX.Element => (
    <Navbar collapseOnSelect expand='lg' bg={'dark'} variant={'dark'}>
        <Navbar.Brand className='navbar-title'> Online store </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>
            <Nav>
                <NavlinkWithTooltip navlinkText='Товары' tooltip='Список всех товаров' route='/store' />
                <NavlinkWithTooltip navlinkText='Корзина' tooltip='Открыть корзину с добавленными товарами' route='/cart' />
                <NavlinkWithTooltip navlinkText='Добавить продукт' tooltip='Добавить новый продукт в магазин' route='/add-product' />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavbarView;
