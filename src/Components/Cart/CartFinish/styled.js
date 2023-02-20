import styled from 'styled-components';
import {
  grayText, darkRedColor, lightGreenColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 60vh;
  align-items: center;
  justify-content: flex-start;

  `;
export const ButtonFinish = styled.button`
    width: 50%;
    height: 25%;
    padding: 5px;
    margin-top: 15px;
    font-weight: bold;
    border-style: none;
    font-size: 20px;
    background: ${lightGreenColor};
    opacity: 0.6;
    color: #fff;
    cursor: pointer;
    :hover{
        opacity: 1;
    }
  `;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  background: #fff;
  padding: 5px;
`;
export const ContainerPrices = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: ${darkGrayColor};
`;
export const FreteLoading = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  color: ${lightGreenColor};
  div{
    width: 25px;
    height: 15px;
  }
`;
export const Containershipping = styled.span`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  padding: 15px 0px;
  align-items: flex-end;
  justify-content: center;
  p{
    font-size: 15px;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  color: ${lightGreenColor};
`;
export const ContainerFrete = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 5px;
  background: #fff;
  padding: 20px 0px;
  form{
    width: 100%;
  }
`;
export const ContainerCupom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 20%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 5px;
  background: #fff;
  padding: 20px 0px;

  label{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  button{
    border: none;
    cursor: pointer;
    margin-left: 5px;
    background: ${lightGreenColor};
    color: #fff;
    font-weight: bold;
    padding: 10px;
  }
  form{
    width: 100%;
  }
`;
export const Label = styled.label`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const ButtonSecundary = styled.button`
    border: none;
    cursor: pointer;
    margin-left: 5px;
    background: ${lightGreenColor};
    color: #fff;
    font-weight: bold;
    padding: 10px;
`;
export const InputSearch = styled.input`
  width: 60%;
  min-height: 35px;
  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  padding-left: 10px;
  background: ${lightGrayColor};
  :focus{
    outline: none;
    border: none;
  }
`;
