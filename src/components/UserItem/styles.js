import styled from 'styled-components/native';

export const Container = styled.View`
    height: 80px;
    width: 100%;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Area = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Avatar = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
`;

export const InfoArea = styled.View`
    width: 200px;
    margin-left: 20px;
`; 

export const UserName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const UserBirthDate = styled.Text`
    font-size: 14px;
`;

export const ButtonArea = styled.View`
    width: 50px;
    margin-left: 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    
`;

export const Image = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 20px;
`;