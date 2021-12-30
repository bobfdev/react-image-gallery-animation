import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

export const Nav = styled.nav`
    height: 60px;
    background: red;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    z-index: 1;
`

export const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

export const Logo = styled(Link)`
     ${NavLink}
`

export const MenuBars = styled.div`
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;