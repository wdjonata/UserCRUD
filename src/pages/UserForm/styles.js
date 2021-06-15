import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #00aced;
`;

export const ButtonBackArea = styled.View`
    position: absolute;
    left: 10px;
    top: 10px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "rgba(0, 0, 0, 0.2)"
  })`
    height: 60px;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 20px;
    
    
`;

export const HeaderArea = styled.View`
    height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const TextHeader = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const Text = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
`;

export const FormArea = styled.View`
    margin: 20px;
`;

export const Avatar = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const AvatarArea = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #FFFFFF;
    width: 100%;
    height: 60px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: #00aced;
    font-weight: bold;
`;