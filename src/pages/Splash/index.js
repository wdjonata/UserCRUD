import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Container, Title, Text, LoadingIcon } from './styles'

export default () => {

    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {navigation.navigate('UserList')},2000)
        
    }, [])


    return (
        <Container>
            <Text>Seja Bem-Vindo!</Text>
            <Title>Cadastro de Usuário</Title>
            {loading &&
                <LoadingIcon size="large" color="#FFFFFF"/>
            }
        </Container>
    )
}

