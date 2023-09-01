
import { styled, Box, Typography } from '@mui/material';

import './Banner.css'


const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkYWtofGVufDB8fDB8fHww&w=1000&q=80) center/55% repeat-x #000;


    /* background: url(https://media.istockphoto.com/id/1155225100/photo/boat-in-dal-lake.jpg?s=612x612&w=0&k=20&c=jcok_q6iitIAqDLPL9L57WvfUR-9vh5BPf18Fbi7yNQ=) center/55% repeat-x #000; */


    /* background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000; */
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;

    @media (max-width: 760px) {
        font-size: 21px;
    } 
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;


    @media (max-width: 760px) {
        font-size: 7px;
    }
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading className="heading">BLOG</Heading>
            <SubHeading className='subHeading'>By Pulak Mahata</SubHeading>
        </Image>
    )
}

export default Banner;