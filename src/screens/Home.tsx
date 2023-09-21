import { View, Text, TouchableOpacity, DimensionValue } from "react-native";
import { Chart } from "../components/Chart";

import { MaterialIcons, MaterialCommunityIcons, Ionicons, Octicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";

const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO",
    "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO",
    "NOVEMBRO", "DEZEMBRO"];
    
const timeUTCMilli = Date.now();
const timeZoneOffsetMilli = (new Date().getTimezoneOffset()) * 60000;
const currentDay = new Date(timeUTCMilli-timeZoneOffsetMilli); 


export function Home() {   

    const series = [270, 230, 320, 180, 220, 183, 279, 223];

    const [widthPercentage , setwidthPercentage] = useState<DimensionValue>("50%");  
    const [monthIndex, setMonthIndex] = useState(currentDay.getMonth());

    function handleArrowBack(): void {
        if(monthIndex > 0) {
            setMonthIndex(prevState => prevState-1);
        }
    }

    function handleArrowForward(): void {
        if(monthIndex < 11) {
            setMonthIndex(prevState => prevState+1);
        }
    }

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
            <View className="flex-row w-1/2 h-8 mt-8 self-center items-center">
                <View>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={handleArrowBack}
                    >
                        <MaterialIcons name="arrow-back-ios" size={24} color="#4A7729" />
                    </TouchableOpacity>
                </View>
                <View className=" flex-1 h-8 justify-center items-center w-20">
                    <Text className="font-bold text-xl text-primary">
                        { months[monthIndex] }
                    </Text>
                </View>
                <View className="flex-row-reverse">
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={handleArrowForward}
                    >
                        <MaterialIcons name="arrow-forward-ios" size={24} color="#4A7729" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-row w-11/12 h-12 border-4 self-center mt-8 border-primary rounded-small bg-secondary opacity-95">
                <View className="h-6 ml-4 flex mt-3">
                    <Text className="text-white font-bold text-base">
                        Despesa
                    </Text>
                </View>
                <View className="flex-1 mr-4 ml-4">
                    <View className="h-4 flex-row mt-1">
                        <View className="w-3/5 items-center">
                            <Text className="text-white font-bold text-xs">
                                R$ 750,00
                            </Text>
                        </View>
                        <View className="flex-1 flex-row-reverse">
                            <Text className="text-red-700 font-bold text-xs">
                                R$ 1.5000,00
                            </Text>
                        </View>
                    </View>
                    <View className="h-3 bg-white">
                        <View style={{width: widthPercentage }} className="h-3 bg-blue-800">
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex-row mt-8">
                <View className="ml-4">
                    <RoundedButton description="Cadastrar despesa" icon={ <MaterialCommunityIcons name="currency-usd" size={24} color="white" /> }/>
                </View>
                <View className="ml-4">
                    <RoundedButton description="Cadastrar receita" icon={ <MaterialCommunityIcons name="currency-usd" size={24} color="white" /> }/>
                </View>
                <View className="ml-4">
                    <RoundedButton description="Extrato do mês" icon={ <MaterialIcons name="request-quote" size={24} color="white" /> }/>
                </View>
                <View className="ml-4">
                    <RoundedButton description="Editar mês" icon={ <MaterialIcons name="edit" size={24} color="white" /> }/>
                </View>
                <View className="ml-2">
                    <RoundedButton extended description="Configurações" icon={ <Octicons name="gear" size={24} color="white" /> }/>
                </View>
            </View>
            <View className="mt-10 items-center">
                <Chart size={280} data={series} />
            </View>
        </View>
    );
}

