import styled from "styled-components";

export const Container = styled.div`
width: 99%;
height: 100%;
display:flex;
`;

export const MenuContainer = styled.div`
width:20%;
height:100%;
display:flex;
justify-content:center;
align-items: center;
`;

export const MenuContent = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

export const ItemContainer = styled.div`
width: 80%;
height:50px;
display: flex;
align-Items:center; 
border-radius:10px;
cursor: pointer;

&:hover{
    background-color: #f2f2f2;
}
`;

export const ItemContent = styled.div`
display:flex;
align-Items:center; 
box-sizing:border-box;
width:100%;
`;

export const ContainerImg = styled.div`
width:50px;
margin: 0 25px 0 30px;
`;

export const PaginaContainer = styled.div`
width: 79%;
height: 500px;
padding: 10px;
box-sizing:border-box;
`;


