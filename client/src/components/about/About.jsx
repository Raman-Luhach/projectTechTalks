import { Box, styled, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 99vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
`;

const Wrapper = styled(Box)`
    margin-top: -50px;
    background-color: #000;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled(Typography)`
    color: #60A5FA;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Text = styled(Typography)`
    color: black;
    margin-top: 20px;
    line-height: 1.6;
`;

const StyledButton = styled(Button)`
    background-color: #000;
    color: #fff;
    &:hover {
        background-color: #1c2833;
    }
    margin-top: 30px;
`;

const Container1 = styled(Box)`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
`;

const Container2 = styled(Box)`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    gap: 5;
`;

const Container3 = styled(Box)`
    width: 100%;
    height: auto;
    display: flex;
    padding: 30px;
    border-radius: 50px;
    justify-content: space-around;
`;

const Container4 = styled(Box)`
    width: 100%;
    height: 40vh;
    color: black;
    background: #f3f4f6;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
`;

const Container5 = styled(Box)`
    width: 30%;    
`

const Wrapper1 = styled(Box)`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f3f4f6;
`

const About = () => {
    return (
        <Box>
            <Banner>
                <Typography variant="h1">Welcome to Tech Talks</Typography>
            </Banner>
            <Wrapper>
                <Container1>
                    <Title variant="h3">Why Tech Talks?</Title>
                    <Text variant="h5">
                        Tech Talks is your premier destination for cutting-edge insights in the world of technology.
                        Designed specifically for tech professionals and students, we offer a curated platform
                        that keeps you ahead in the rapidly evolving tech landscape.
                    </Text>
                </Container1>

                {/*<Container2>*/}
                {/*    <Title variant="h3">How Tech Talks is Different</Title>*/}
                {/*    <Container3>*/}
                {/*        <Container5>*/}
                {/*            <div className={"bg-red-400"}>*/}
                {/*                <Typography variant="h5">Other Blogging Sites</Typography>*/}
                {/*                <ul>*/}
                {/*                    <li>General content for a broad audience</li>*/}
                {/*                    <li>Mixed quality of articles</li>*/}
                {/*                    <li>Limited focus on technical depth</li>*/}
                {/*                    <li>Infrequent updates on tech trends</li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </Container5>*/}
                {/*        <Container5>*/}
                {/*            <Container4>*/}
                {/*                <Typography variant="h5">Tech Talks</Typography>*/}
                {/*                <ul>*/}
                {/*                    <li>Tailored content for tech professionals and students</li>*/}
                {/*                    <li>High-quality, expert-written articles</li>*/}
                {/*                    <li>In-depth technical analysis and insights</li>*/}
                {/*                    <li>Regular updates on the latest tech trends</li>*/}
                {/*                </ul>*/}
                {/*            </Container4>*/}
                {/*        </Container5>*/}
                {/*    </Container3>*/}
                {/*</Container2>*/}
                <Wrapper1>
                    <Text variant="h2">Ready to Dive in</Text>
                    <StyledButton component={Link} to="/">
                        Back to Main Page
                    </StyledButton>
                </Wrapper1>
            </Wrapper>
        </Box>
    );
};

export default About;
