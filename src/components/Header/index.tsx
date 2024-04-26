
import{
    Container,
    LeftContainer,
    ButtonContainer,
    HamburgerIcon,
    CenterContainer,
    SearchContainer,
    SearchInput,
    SearchButton,
    SearchIcon,
    IconButtonContainer,
    MicrophoneIcon,
    RigthContainer,
    VideoIcon,
    SinoIcon,
    
} from  "./styles";

import Hamburger from '../../assets/header/hamburger.png';
import Logo from '../../assets/header/YouTube-Logo.png';
import Search from '../../assets/header/search.png';
import Video from '../../assets/header/video.png';
import Sino from '../../assets/header/sino.png';
import Microphone from '../../assets/header/microfone-gravador.png';

function Header(){


    return(        

        <Container>

            <LeftContainer>
                <ButtonContainer >              
                    <HamburgerIcon alt= "" src={Hamburger} />
                </ButtonContainer>
                <img 
                style = { {cursor:'pointer', width: '100px', margin: '0 0 0 20px'} } 
                src={Logo} alt="" />
            </LeftContainer>

            <CenterContainer>
                <SearchContainer>
                    <SearchInput>                        
                    </SearchInput>
                </SearchContainer>
                <SearchButton>
                    <SearchIcon alt="" src={Search}/>
                </SearchButton>
            <IconButtonContainer>
                <MicrophoneIcon alt="" src={Microphone}/>
            </IconButtonContainer>
            </CenterContainer>

            <RigthContainer>
                <ButtonContainer>
                    <VideoIcon alt="" src={Video} />
                </ButtonContainer>
                <ButtonContainer>
                    <SinoIcon alt="" src={Sino} />
                </ButtonContainer>
                <ButtonContainer>
                    A
                </ButtonContainer>
            </RigthContainer>

        </Container>

    )
}

export default Header;


