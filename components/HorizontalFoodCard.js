import React from "react";
import { 
    TouchableOpacity,
    View,
    Text,
    Image
} from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}) =>{
    return(
        <TouchableOpacity
        style = {{
            flexDirection: 'row',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle
        }}
        >
            {/* Image */}
            <Image
                source = {item.image}
                style={imageStyle}
            />

            {/* Info */}
            <View
                style = {{
                    flex: 1
                }}
            >
                {/* Name */}
                <Text style = {{...FONTS.h3, fontSize: 17}}>
                    {item.name}
                </Text>
                {/* Description */}
                <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
                    {item.description}
                </Text>
                {/* Price */}
                <Text style ={{marginTop: SIZES.base,  ...FONTS.h2}}>
                    Php{item.price}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

export default HorizontalFoodCard