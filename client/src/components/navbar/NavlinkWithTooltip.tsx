import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface INavlinkWithTooltipProps {
    navlinkText: string;
    tooltip: string;
    route: string;
}

const NavlinkWithTooltip: React.FC<INavlinkWithTooltipProps> = ({ navlinkText, tooltip, route }) => (
    <OverlayTrigger placement='bottom' overlay={<Tooltip id='button-tooltip-2'>{tooltip}</Tooltip>}>
        <Nav.Link className='navlink-container' as={Link} to={route}>
            {navlinkText}
        </Nav.Link>
    </OverlayTrigger>
);

export default NavlinkWithTooltip;
