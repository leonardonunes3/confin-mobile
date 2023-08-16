import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Button } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    function handleToggleHiddenPassword(): void {
        setHidden(!hidden);
    }

    function handleForgotPassword(): void {
        throw new Error("Function not implemented.");
    }

    function handleSignUp(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <View className="flex-1 bg-background">
            <View className="h-1/3 z-0">
                <Image source={require('../assets/graphs.png')} resizeMode="stretch" className='h-full w-full'/>
            </View>
            <View className="bg-background h-3/4 rounded-t-large absolute z-10 bottom-0 left-0 w-full">
                <View className="items-center pt-2">
                    <Image source={require('../assets/Logo.png')} className="w-40 h-40"/>
                </View>
                <View className="h-12 ml-9 mr-4 mt-12 justify-center">
                    <View className="h-12 border-b border-primary justify-center">
                        <View className="flex flex-row items-center">
                            <MaterialCommunityIcons name="email-outline" size={20} color="#4A7729"/>
                            <TextInput
                                className="font-regular text-base ml-4 text-primary"
                                onChangeText={setEmail}
                                value={email}
                                placeholder="email@email.com"
                                placeholderTextColor={'#4A7729'}
                            />
                        </View>
                    </View>
                </View>
                <View className="h-12 ml-9 mr-4 mt-6 justify-center">
                    <View className="h-12 border-b border-primary justify-center">
                        <View className="flex flex-row items-center">
                            <MaterialCommunityIcons name="lock-outline" size={20} color="#4A7729"/>
                            <TextInput
                                className="font-regular text-base ml-4 text-primary"
                                onChangeText={setPassword}
                                value={password}
                                placeholder="••••••••••••"
                                placeholderTextColor={'#4A7729'}
                                secureTextEntry={hidden}
                            />
                            <TouchableOpacity 
                                className="flex-row-reverse flex-1"
                                onPress={handleToggleHiddenPassword}
                                activeOpacity={0.7}
                            >
                                { hidden ? <MaterialCommunityIcons name='eye-off-outline' size={20} color="#4A7729"/> : <MaterialCommunityIcons name='eye-outline' size={20} color="#4A7729"/>} 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="h-4 mx-4 mt-4">
                    <View className="flex-1 flex-row-reverse items-center">
                        <TouchableOpacity
                            className=""
                            onPress={handleForgotPassword}
                            activeOpacity={0.7}
                        >
                            <Text className="h-4 font-bold text-xs text-primary">
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="h-12 mx-4 mt-16">
                    <TouchableOpacity 
                        className="bg-primary justify-center items-center flex-1 rounded-medium"
                        activeOpacity={0.7}
                    >
                        <Text className="text-white font-regular text-base">
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-2 flex-row justify-center">
                    <Text className="text-xs text-primary">
                        Não tem uma conta?{` `}
                    </Text>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        activeOpacity={0.7}
                    >
                        <Text className="text-xs text-link underline">
                            Inscreva-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}