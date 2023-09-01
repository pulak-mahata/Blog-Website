
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Footer from '../footer/Footer';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const TopContainer = styled(Box)`

    margin-bottom:80px;
`


const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
        <TopContainer>
            <Banner />
            <Wrapper>
                <Typography variant="h4">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on <span></span>
                    <Link href="https://www.linkedin.com/in/pulak-mahata-769a32249/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    <br/>
                    or send me an Email <span></span>
                    <Link href="mailto:22pulak@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </TopContainer>
        <Footer/>
        </Box>
    );
}

export default Contact;