import React, { useState }from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Icon } from 'react-native-elements' 

import { useNavigation, useRoute } from '@react-navigation/native'

import firestore from '@react-native-firebase/firestore'

import * as ImagePicker from "react-native-image-picker"

import DateInput from '../../components/DateInput'

import { 
    Container,
    ButtonBackArea,
    Input, 
    HeaderArea,
    TextHeader, 
    Text, 
    FormArea, 
    Avatar, 
    AvatarArea, 
    Image,
    Button,
    TextButton
} from './styles'

export default () => {

    const navigation = useNavigation()

    const route = useRoute()

    const [codUser, setCodUser] = useState(route.params.id)
    const [nameUser, setNameUser] = useState(route.params.name)
    const [birthDate, setBirthDate] = useState(new Date(route.params.birthDate))
    const [avatar, setAvatar] = useState(route.params.avatar)

    const getImage = () => {

        ImagePicker.launchImageLibrary(null, (r)=>{
            if(r.assets) {
                let avatar = (r.assets[0].uri)
                setAvatar(avatar)
                
            }
        })
    }

    const handleBackButton = () => {
        navigation.goBack()
    }

    const saveUser = () => {
        
        if(codUser !== "" && nameUser !== ""){

            var doc = firestore().collection('Users').doc(codUser);
            doc.get()
                .then(docData => {
                    let url = avatar
                    if (docData.exists) {
                        
                        doc.update({
                            name: nameUser,
                            birthDate: birthDate,
                            avatar: url
                        })
                        .then(() => {
                            alert('Atualizado com Sucesso!');
                        })
                    } else {
                        
                        
                        doc.set({
                            avatar: url,
                            name: nameUser,
                            birthDate: birthDate,
                        })
                        .then(() => {
                            alert('Criado com Sucesso!');
                        })
                      
                    }
                })

        } else {
            if(codUser == ""){
                alert("C??digo: campo obrigat??rio!")
            }
            if(nameUser == ""){
                alert("Nome: campo obrigat??rio!")
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <Container>
            <HeaderArea>
                <ButtonBackArea>
                    <Icon
                        name='chevron-left'
                        type='font-awesome'
                        color='#FFFFFF'
                        onPress={handleBackButton}
                    />
                </ButtonBackArea>
                <TextHeader>Formul??rio do Usu??rio</TextHeader>
            </HeaderArea>
            
            <FormArea>
                <AvatarArea>
                    <Avatar onPress={getImage}>
                        {avatar 
                            ?  <Image source={{uri: avatar}}/>
                            : <Icon size={50}  name='camera' type='font-awesome' color='#FFFFFF'/>
                        
                        }
                       
                        
                    </Avatar>
                </AvatarArea>
                <Text>C??digo</Text>
                <Input
                    onChangeText={codUser => setCodUser(codUser)}
                    value={codUser}
                    placeholder="Informe o C??digo do Usu??rio"
                />
                <Text>Nome</Text>
                <Input
                    onChangeText={nameUser => setNameUser(nameUser)}
                    value={nameUser}
                    placeholder="Informe o Nome do Usu??rio"
                />
                <Text>Data de Nascimento</Text>
                <DateInput date={birthDate} onChange={setBirthDate}/>
                
                
                <Button onPress={saveUser}>
                    <TextButton>Salvar</TextButton>
                </Button>                           
               
            </FormArea>
        </Container>
        </TouchableWithoutFeedback>
    )
}
