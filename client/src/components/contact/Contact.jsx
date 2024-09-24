
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://as1.ftcdn.net/v2/jpg/02/12/64/94/1000_F_212649480_sILfiQOmORrK2l6ZbqCLh9nybhvP7Sfq.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="." color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email
                    <Link href="." target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
