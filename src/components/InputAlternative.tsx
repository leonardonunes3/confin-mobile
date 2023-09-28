import { TextInput, TextInputProps, View } from "react-native";

type InputProps = {
    Icon: JSX.Element;
} & TextInputProps;

export function InputAlternative({Icon, ...props}: InputProps) {
    return(
        <View className="ml-4 mr-9 h-8 mt-4 border border-primary bg-gray justify-center pl-2">
            <View className="flex-row">
                { Icon }
                <TextInput
                    className="font-regular text-base ml-4 text-primary"
                    {...props}
                />
            </View>
        </View>
    );
}