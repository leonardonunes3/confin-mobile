import { View, Text } from "react-native";
import { Chart } from "../components/Chart";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Home() {
    const series = [250.39, 130.2, 419.5];

    return (
        <View className="flex-1 bg-background">
            <View className="flex-row w-full h-28 bg-primary rounded-br-medium align-middle">
                <View className="h-6 mt-14 ml-4">
                    <Ionicons name="reorder-four-outline" size={24} color="white" />
                </View>
                <View className="h-6 mt-14 ml-12">
                    <Text className="text-white font-bold text-base">
                        Olá, Leonardo!
                    </Text>
                </View>
                <View className="h-6 mt-14 flex-1 flex-row-reverse">
                    <View className="mr-5">
                        <Ionicons name="ios-log-out-outline" size={24} color="white" />
                    </View>
                </View>
            </View>
            <Chart size={280} data={series} />
        </View>
    );
}