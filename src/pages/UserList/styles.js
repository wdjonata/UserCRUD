import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #00aced;
`;

export const ButtonArea = styled.View`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export const HeaderArea = styled.View`
    height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`;

export const ListArea = styled.ScrollView`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;