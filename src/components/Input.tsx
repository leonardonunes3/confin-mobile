import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type InputProps = {
    Icon: JSX.Element;
    secret?: boolean;
} & TextInputProps;

export function Input({Icon, ...props}: InputProps) {
    const [hidden, setHidden] = useState(true);

    function handleToggleHiddenPassword(): void {
        setHidden(!hidden);
    }

    return (
        <View className="h-12 border-b border-primary justify-center">
            <View className="flex flex-row items-center">
                { Icon }
                <TextInput
                    className="font-regular text-base ml-4 text-primary"
                    {...props}
                    secureTextEntry={props.secret ? hidden : false}
                />
                { props.secret ? 
                    <TouchableOpacity 
                        className="flex-row-reverse flex-1"
                        onPress={handleToggleHiddenPassword}
                        activeOpacity={0.7}
                    >
                        { hidden ? <MaterialCommunityIcons name='eye-off-outline' size={20} color="#4A7729"/> 
                                 : <MaterialCommunityIcons name='eye-outline' size={20} color="#4A7729"/>} 
                    </TouchableOpacity> : <></> }
            </View>
        </View>
    );
}