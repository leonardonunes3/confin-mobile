import { View, Text } from "react-native";
import PieChart from "react-native-pie-chart";

interface ChartProps {
    data: number[];
    size: number;
}


export function Chart(chartProps: ChartProps) {
    const colors = ["#CD1C1C", "#294077", "#ED7547", "#93471B", "#85B6FF", "#FBD203", "#A3A3A3","#4ECB71"];
    const labels = ["Transporte", "Alimentação", "Educação", "Lazer", "Supermercado", "Compras", "Saúde", "Eletrônicos"];


    return (
        <View className="items-center flex-col w-11/12">
            <PieChart 
                    widthAndHeight={chartProps.size}
                    series={chartProps.data}
                    sliceColor={colors}
                    coverRadius={0.60}
                    coverFill={'#FFF'}
                />
            <View className="flex-wrap mt-6 flex-row w-full">
                {   
                    colors.map((_, index) => {
                        const style = `ml-2 w-4 h-4 bg-chartColor${index+1}`
                        return (
                            <View className="flex-row basis-1/3 mb-1">
                                <View className={style} key={index+1} />
                                <Text className="font-bold text-xs text-black" key={index+10}> { labels.at(index) } </Text>
                            </View>
                        )
                    }) 
                } 
            </View>
        </View>
    );
}