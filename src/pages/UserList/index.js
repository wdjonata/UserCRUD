import React, { useState, useEffect } from 'react'

import { Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import UserItem from '../../components/UserItem'

import firestore from '@react-native-firebase/firestore'

import { Container, ButtonArea, HeaderArea, Text, ListArea, LoadingIcon } from './styles'

export default () => {

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const subscriber =  firestore().collection('Users')
            .onSnapshot(querySnapshot => {
                const users = [];

                for (const doc of querySnapshot.docs) {
                    users.push({
                        name : doc.data().name,
                        avatar: doc.data().avatar,
                        birthDate: new Date(doc.data().birthDate.seconds * 1000),
                        id: doc.id
                    })
                }
                setUserList(users)
                setLoading(false)

            });

        return () => subscriber();

      }, []  );

    const handleClick = () => {
        navigation.navigate('UserForm', {
            id: "",
            avatar: "",
            name: "",
            birthDate: "2005-02-05T20:20:00.000Z",
        })
    }

    const navigation = useNavigation()

        return (
            <Container>
                <HeaderArea>
                    <Text> Lista de Usuários </Text>
                </HeaderArea>
                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF"/>
                }
                <ListArea>
                    {userList.map((item, k)=>(
                        <UserItem key={k} data={item}/>
                    ))}
                </ListArea>
                <ButtonArea>
                    <Icon
                        raised
                        name='plus'
                        type='font-awesome'
                        color='#00aced'
                        onPress={handleClick}
                    />
                </ButtonArea>
            </Container>
        )
}
