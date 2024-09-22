import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    height: 92vh;
    background: url(https://c4.wallpaperflare.com/wallpaper/57/715/636/technology-black-background-wallpaper-preview.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LogoImage = styled('img')`
    width: 500px; 
    height: auto;
`;

const Banner = () => {
    return (
        <Image>
            <LogoImage src="https://i.ibb.co/vDtJT24/simple-and-creative-logo-for-tech-talks-written-in-cursive-more-and-clearer-offwhite-and-red-with-bl.png" alt="TechTalks Logo" />
        </Image>
    );
}

export default Banner;
