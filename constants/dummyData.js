import { icons, images } from "./";

const myProfile = {
    name: "ByProgrammers",
    profile_image: images.profile,
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Milk Tea",
        icon: icons.bubbletea
    },
    {
        id: 2,
        name: "Fruity Juice",
        icon: icons.fruity
    },
    {
        id: 3,
        name: "Foods",
        icon: icons.rice
    }
]

const hamburger = {
    id: 1,
    name: "Bestea 1",
    description: "Baka Bestea Yan",
    categories: [1],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Bestea 2",
    description: "Baka Bestea yan ulit",
    categories: [1],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Bestea 3",
    description: "Di ko na alam",
    categories: [1],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Bestea 4",
    description: "Bestea ulit",
    categories: [1],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const strawberry = {
    id: 5,
    name: "Strawberry",
    description: "Bestea Strawberry",
    categories: [1, 2],
    price: 10.99,
    isFavourite: true,
    image: require("../assets/dummyData/fruity.png")
}
const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani, strawberry
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich, strawberry
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich, strawberry
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani, strawberry
        ]
    },
    {
        id: 5,
        name: "Milk Tea",
        list: [
            hamburger, vegBiryani, wrapSandwich, strawberry
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich, strawberry
        ]
    },

]


export default {
    myProfile,
    categories,
    menu,
}