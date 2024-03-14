import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeatureRow = ({ id, title, description }) => {
    return (
        <View>
            < View className="mt-4 flex-row items-center justify-between px-4" >
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View >

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4">

                {/* Restaurant Cards */}
                <RestaurantCard
                    id={123}
                    imgUrl="http://links.papareact.com/gn7"
                    title="Sushi Shop"
                    rating={4.5}
                    genre="Japanese"
                    address="AMIENS · 9 Rue des Corps"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/mcDonald.png?alt=media&token=f9375c73-daf9-44d1-b77a-7334795c3ee6"
                    title="McDonald's - AMIENS"
                    rating={4.5}
                    genre="Américain·Burgers"
                    address="AMIENS · 44 Rue des Trois Cailloux"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/Mosa%C3%AFque_pizza.png?alt=media&token=7f5fab62-a034-4e81-9216-d4f0f764eade"
                    title="Mosaïque pizza"
                    rating={4.5}
                    genre="Italien"
                    address="AMIENS · 2 Rue Allart"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView >
        </View >

    )
}

export default FeatureRow




