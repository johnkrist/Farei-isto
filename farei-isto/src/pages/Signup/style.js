import styled, { keyframes } from "styled-components";
import taskimg from "../../image/task.png";

export const Container = styled.div`
height: 100vh;
`;
export const Background = styled.div`
  margin-left: 21%;
  position: absolute;
  background-image: url(${taskimg});
  background-repeat: no-repeat; ;
  
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;
const apperFromRigth = keyframes`
from{
    opacity: 0;
    transform: translateX(50px);
}
to{
    opacity: 1;
    transform: translateX(0px)
}


`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apperFromRigth} 2s;
  

  form {
    margin: 170px;

    width: 450px;

    text-align: center;

    h2 {
      margin-bottom: 32px;
    }
    p {
      margin-top: 8px;
      font-size: 20px;
      a {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
`;
