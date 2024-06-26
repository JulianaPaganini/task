import styled from "styled-components";



export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;

  ul{
    padding: 0;
    margin-top: 60px;
  }
`;
export const Input = styled.input`
    width: 342px;
    height: 40px;
    margin-top: 30px;
    margin-left: 20px;
    border-radius: 8px;
    border: 2px solid #D1D3D466;
    font-weight: 400;
    font-size: 15px;
    line-height: 17.58px;
    padding: 10px;
`;
export const Button = styled.button`
  width: 130px;
  height: 40px;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 8px;
  background: #8052EC;
  color: #ffffff;
  border: none;
  font-weight: 900;
  font-size: 17px;
  line-height: 2.5px;
  cursor: pointer;
`;

export const Div  = styled.div`
    background: ${ props => props.$isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

      li{
        list-style: none;
      }
`;

