import { ActivityIndicator, View } from "react-native";


export function Loading() {

    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator color="#4A7729"/>
        </View>
    );
}