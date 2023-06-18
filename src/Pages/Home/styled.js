import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url();
  background-repeat: none;
  background-size: cover;
  background-position: bottom;
  overflow-x: hidden;
  span{
    width: 100%;
    height: 10%;
    overflow: hidden;
  }

`;

export const ContainerBanner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
  background: blue;
  overflow: hidden;
  img{
    height: auto;
    width: 100%;
  }


`;
