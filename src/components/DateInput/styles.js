import styled from 'styled-components/native'

export const Container = styled.View`
    margin-bottom: 20px;
`;

export const DateButton = styled.TouchableOpacity`
    height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
`;

export const DateText = styled.Text`
    font-size: 14px;
    color: #FFF;
    padding: 0 20px;
`;

export const Picker = styled.View`
    margin-top: 30px;
    padding: 15px 50px;
    align-items: center;
`;