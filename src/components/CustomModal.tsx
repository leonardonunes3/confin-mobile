import { View, Modal, Pressable, Text, TextInputProps } from "react-native";
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { InputAlternative } from "./InputAlternative";

type CustomModalProps = {
    onModalChange() : void
    modalVisible: boolean
} & TextInputProps;

export function CustomModal({onModalChange, modalVisible, ...props}: CustomModalProps) {
    return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={onModalChange}
            >
                <View className="flex-1 justify-center">
                    <View className="mt-20 bg-white w-11/12 h-1/2 self-center border-2 border-primary rounded-medium">
                        <View className="flex-row items-center mt-4 mr-9">
                            <Pressable
                                onPress={onModalChange}>
                                <View className="ml-4">
                                    <Feather name="x" size={24} color="#4A7729" />
                                </View>
                            </Pressable>
                            <View className="flex-1">
                                <Text className="font-bold text-base text-primary self-center">Nova despesa</Text>
                            </View>
                        </View>
                        <View className="flex-col mt-2">
                            <InputAlternative 
                                Icon={ <MaterialIcons name="description" size={24} color="#4A7729" /> }
                                {...props}
                            />
                            <InputAlternative Icon={ <MaterialCommunityIcons name="currency-usd" size={24} color="#4A7729" /> }/>
                            <InputAlternative Icon={ <MaterialCommunityIcons name="calendar-month" size={24} color="#4A7729" /> }/>
                            <InputAlternative Icon={ <MaterialCommunityIcons name="layers-outline" size={24} color="#4A7729" /> }/>
                        </View>
                    </View>
                </View>
            </Modal>
   );
}