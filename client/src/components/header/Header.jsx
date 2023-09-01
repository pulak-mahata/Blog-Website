
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import './Header.css'


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
   
    
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

// const Container = styled(Toolbar)(({ theme }) => ({
//     justify-content: 'center';
//     & > a {
//         padding: 20px;
//         color: #000;
//         text-decoration: none;
//     }
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));





const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component className='main'>
            <Container className='container'>
          
                <Link className='item First' to='/' >HOME</Link>
                <Link className='item' to='/about'>ABOUT</Link>
                <Link className='item' to='/contact'>CONTACT</Link>
                <Link className='item Last' to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;