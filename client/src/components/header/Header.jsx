
import {AppBar, Toolbar, styled, Button, Box} from '@mui/material';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #000;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Container = styled(Toolbar)`
    & > a {
        padding: 20px;
        color: wheat;
        text-decoration: none;
    }
    margin-right: 20px;
`

const Image = styled('img')`
    width: 85px; 
    height: 85px;
    margin-left: 20px;
`


const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');

    return (
        <Component>
            {/*<Image src={"https://i.ibb.co/vDtJT24/simple-and-creative-logo-for-tech-talks-written-in-cursive-more-and-clearer-offwhite-and-red-with-bl.png"} alt="logo" />*/}
            <Image
                src="https://i.ibb.co/vDtJT24/simple-and-creative-logo-for-tech-talks-written-in-cursive-more-and-clearer-offwhite-and-red-with-bl.png"
                alt="logo"
            />
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;
