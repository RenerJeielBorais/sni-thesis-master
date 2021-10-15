import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image
 } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
    return(
        <TouchableOpacity
            style = {{
                width: 200,
                padding: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Favourite Section */}
            {/* Image */}
            <View
            style = {{
                height: 150,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Image
                    source = {item.image}
                    style = {{
                        height: '100%',
                        width: '100%'
                    }}
                />
            </View>

            { /* Info */}
            <View
            style = {{
                alignItems: 'center',
                marginTop: 5
            }}
            >
                <Text style = {{...FONTS.h3}}>{item.name}</Text>
                <Text style ={{color: COLORS.gray2, textAlign: 'center', ...FONTS.body5}}>
                    {item.description}
                </Text>
                <Text
                    style = {{ marginTop: SIZES.radius, ...FONTS.h2}}
                >
                    Php{item.price}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard;