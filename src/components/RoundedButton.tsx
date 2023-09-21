import { View, Text } from "react-native";

type RoundedButtonProps = {
    description : string,
    extended?: boolean,
    icon : JSX.Element;
}

export function RoundedButton(props : RoundedButtonProps) {
    return(
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
    );
}