import { View, Text, TouchableOpacity, TextInputProps } from "react-native";

type RoundedButtonProps = {
    onClick(): void
    description : string,
    extended?: boolean,
    icon : JSX.Element;
}

export function RoundedButton(props : RoundedButtonProps) {
    return(
        <TouchableOpacity 
            onPress={props.onClick}
            activeOpacity={0.7}
        >
            <View className={props.extended ? "w-20" : "w-14"}>
                <View className="h-12 w-12 rounded-large bg-secondary opacity-95 self-center justify-center items-center">
                    { props.icon }
                </View>
                <View>
                    <Text className="text-primary font-bold text-xs text-center">
                        { props.description }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}