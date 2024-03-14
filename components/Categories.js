import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator>
            {/* CategoryCard */}
            {/* url image passer en props */}
            <CategoryCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/burgers-2.webp?alt=media&token=4c29c472-21b7-4a80-b550-bcd6f3049ca9"
                title="Burger"
            />
            <CategoryCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/kebab.webp?alt=media&token=cd7f8c6e-99a1-40e4-b373-064b9db7c428"
                title="Kebab"
            />
            <CategoryCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/pizza.webp?alt=media&token=41daa7be-83ac-49b1-b98e-23565c219e98"
                title="Pizza"
            />
            <CategoryCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/poke.webp?alt=media&token=adde342e-92ff-456d-9f5b-1e9681fbd6d7"
                title="Poke"
            />
            <CategoryCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/sandwich.webp?alt=media&token=03bd5b11-d796-432c-9aa2-344d21ee1708"
                title="Sandwich"
            />
            <CategoryCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/dylandhuille-5a47d.appspot.com/o/sushi-1.webp?alt=media&token=2f06da33-06de-466d-ad2e-368744ea5f45"
                title="sushi"
            />


        </ScrollView>
    )
}

export default Categories