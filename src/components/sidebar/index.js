import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    BtnWrap,
} from "./SidebarElements"
import { menuData } from '../../data/MenuData';
import { Button } from '../ButtonElements';

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {menuData.map((item, index) => {
                        return (
                            <SidebarLink to={item.link} key={index}>
                                {item.title}
                            </SidebarLink>
                        )
                    })}
                </SidebarMenu>
                <BtnWrap>
                    <Button to='/contact' primary='true' round='true' big='true'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
