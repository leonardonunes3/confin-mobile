import PieChart from "react-native-pie-chart";

interface ChartProps {
    data: number[];
    size: number;
}

export function Chart(chartProps: ChartProps) {
    const colors = ["#85B6FF", "#4ECB71", "#FF9A62"];

    return (
        <PieChart 
                widthAndHeight={chartProps.size}
                series={chartProps.data}
                sliceColor={colors}
                coverRadius={0.60}
                coverFill={'#FFF'}
            />
    );
}