import styled from "styled-components";

    export const Container = styled.header`
        display: flex;
        width: 99%;
        height: 55px;
        margin: 10px 10px 0 10px;
        box-sizing:border-box;
        align-items: center;
        justify-content: space-between;
    `;
    
    export const LeftContainer = styled.div`
        display: flex;
        width: 20%;
        height: 55px;
        align-items: center;
        padding-left: 10px;
        box-sizing:border-box;
    `;

    export const ButtonContainer = styled.div`
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
                
        &:hover{
                background-color: #f2f2f2;
            }
    `;

    export const HamburgerIcon = styled.img`
        width: 20px;
    `;
    
    export const CenterContainer = styled.div`
        width: 60%;
        height:55px;
        display:flex;
        align-items: center;
        justify-content: center;
    `;

    export const SearchContainer = styled.div`
        width: 600px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #8c8c8c;
        border-radius: 30px 0 0 30px;
    `;

    export const SearchInput = styled.input`
        width: 595px;
        height: 35px;
        padding: 0 0 0 20px;
        border-radius: 30px 0 0 30px;
        border: none;
        
    `;

    export const IconButtonContainer = styled.div`
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
        background-color: #f2f2f2;
                
        &:hover{
                background-color: #e6e6e6;
            }
    `;

    export const MicrophoneIcon = styled.img`
        width: 20px;
    `;

    export const SearchButton = styled.div`
        width: 80px;
        height: 40px;
        background-color: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #8c8c8c;
        border-radius: 0 30px 30px 0;
        margin: 0 20px 0 0;
        cursor: pointer;

        &:hover{
            background-color: #e6e6e6;
        }
    `;

    export const SearchIcon = styled.img`
    width: 20px;
    `;

    export const RigthContainer = styled.div`
        width: 20%;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 10px 0 10px;
        box-sizing: border-box;
    `;

    export const VideoIcon = styled.img`
        width: 25px;
    `;

    export const SinoIcon = styled.img`
        width: 25px;
    `;