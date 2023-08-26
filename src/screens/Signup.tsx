import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Input } from "../components/Input/Input";

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;


export function SignUp({ navigation } : SignUpProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleBackButton(): void {
        navigation.navigate('Login');
    }

    return (
        <View className="flex-1 bg-background">
            <View className="h-1/3 z-0">
                <Image source={require('../assets/graphs.png')} resizeMode="stretch" className='h-full w-full'/>
            </View>
            <View className="absolute z-10 top-12 left-8">
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={handleBackButton}
                >
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View className="bg-background h-3/4 rounded-t-large absolute z-10 bottom-0 left-0 w-full">
                <View className="h-12 ml-9 mt-20">
                    <Text className="text-primary font-bold text-3xl">
                        Cadastro
                    </Text>
                </View>
                <View className="h-12 ml-9 mr-4 mt-8 justify-center">
                    <Input      
                        Icon={ <AntDesign name="user" size={20} color="#4A7729" /> } 
                        onChangeText={setName}
                        value={name}
                        placeholder="nome"
                        placeholderTextColor={'#4A7729'}
                        secret={false} 
                    />
                </View>
                <View className="h-12 ml-9 mr-4 mt-6 justify-center">
                    <Input      
                        Icon={ <MaterialCommunityIcons name="email-outline" size={20} color="#4A7729"/> } 
                        onChangeText={setEmail}
                        value={email}
                        placeholder="email@email.com"
                        placeholderTextColor={'#4A7729'}
                        secret={false} 
                    />
                </View>
                <View className="h-12 ml-9 mr-4 mt-6 justify-center">
                    <Input      
                        Icon={ <MaterialCommunityIcons name="lock-outline" size={20} color="#4A7729"/> } 
                        onChangeText={setPassword}
                        value={password}
                        placeholder="••••••••••••"
                        placeholderTextColor={'#4A7729'} 
                        secret={true}
                    />
                </View>
                <View className="h-12 mx-4 mt-24">
                    <TouchableOpacity 
                        className="bg-primary justify-center items-center flex-1 rounded-medium"
                        activeOpacity={0.7}
                    >
                        <Text className="text-white font-regular text-base">
                            Criar conta
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}