import React from 'react';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

import pt from 'date-fns/locale/pt'
import { format } from 'date-fns';

import firestore from '@react-native-firebase/firestore'

import {
    Container,
    Avatar,
    Image,
    Area,
    InfoArea,
    UserName,
    UserBirthDate,
    ButtonArea

} from './styles'

export default ({data}) => {

    const navigation = useNavigation()

    const handleClick = () => {
        navigation.navigate('UserForm', {
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            birthDate: data.birthDate,

        })
    }

    const deleteUser = () => {
        firestore().collection('Users').doc(data.id).delete()
    }

    const dateFormatted = () => (format(data.birthDate, "dd 'de' MMMM 'de' yyyy", {locale: pt}))

    return (
        <Container>
            <Avatar >
                {data.avatar 
                    ?  <Image source={{uri: data.avatar}}/>
                    : <Icon size={20}  name='camera' type='font-awesome' color='#FFFFFF'/>
                
                }
                       
                        
            </Avatar>
            <Area> 
                
                <InfoArea>
                    <UserName>{data.name}</UserName>
                    <UserBirthDate>{dateFormatted()}</UserBirthDate>
                </InfoArea>
                <ButtonArea>
                    <Icon
                        name='pencil'
                        type='font-awesome'
                        color='orange'
                        onPress={handleClick}
                    />
                    <Icon
                        size={20}
                        name='trash'
                        type='font-awesome'
                        color='red'
                        onPress={deleteUser}
                    />
                </ButtonArea>

            </Area>
        </Container>
    )
}