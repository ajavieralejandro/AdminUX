import Grid from '@material-ui/core/Grid';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  font-size : 20px;
  &:hover {
    transform: scale(1.5);
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
${OptionsContainerStyles}
`;


export const LogoDiv =  styled.div`
margin: 2%;
a:hover {
    background-color: yellow;
  }

`

export const StyledGrid = styled(Grid)`
    margin-left : 10%
`

export const Drawner = styled.div`
opacity:0.9;
background-color:black;
color: bisque;
position:fixed;
width:100%;
height:100%;
top:0px;
left:0px;
z-index:1000;`


export const CenterText = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`