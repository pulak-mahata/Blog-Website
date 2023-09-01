
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Footer from '../footer/Footer';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    margin-bottom:50px;
    & > h3, & > h5 {
        margin-top: 50px;
    }

`;

const Text = styled(Typography)`
    color: #878787;
    margin-bottom:80px;

`;

const footerContainer = styled(Box)`
margin-top: 10px;

`

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h4">Pulak Mahata</Typography>
                <br/>
                <Text variant="h6">I'm a Full-Stack Developer based in Kolkata, India. 
                   <br />
                    You can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/pulak-mahata" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>

                {/* <Text variant="h5"> */}
                    {/* Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>. */}

                        
                {/* </Text> */}

              
            </Wrapper>

             
            <footerContainer>
                <Footer/>
                </footerContainer>
               
             
        </Box>
    )
}

export default About;