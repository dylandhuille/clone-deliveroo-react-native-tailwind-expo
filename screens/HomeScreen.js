import { View, Text, Image, TextInput, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';

//import nav
import { useNavigation } from "@react-navigation/native";
// const [featuredCategories, setFeaturedCategories] = useState([])

// import icon
import {
    AdjustmentsIcon,
    ChevronDownIcon,
    SearchIcon,
    UserIcon
} from "react-native-heroicons/outline";
//import components
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
// import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        //on supprime le header part defaut de react nav
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "featured"] {
                ...,
              restaurants[]->{
              ...,
              dishes[]->
              }
              }
              `
        ).then((data) => {
            setFeaturedCategories(data);
        });
    }, []);

    // console.log(featuredCategories);

    return (
        <SafeAreaView className="bg-white flex-1">
            <StatusBar backgroundColor="#00CCBB"
            />
            {/* entete */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                {/* image de profil */}
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxERExYRExMWFhYWFhYRFxYYFhEWFhYYFhYXFxYWFhYZHioiGRsnHxYYIzMjJystMDAwGCE2OzYuOiovMC0BCwsLDw4PHBERGy8nIicvLy0vLy8vLy8tLS8vLy8vLy8vLy0vLy8vLS0vLy8vLy8vLy8tLy8vLy8vLy8vLS8vL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQUCBAMGBwj/xAA9EAACAQIDBQUEBgoDAQAAAAAAAQIDEQQhMQUSQVFxBmGBkbEHIqHBEzIzctHwFCNCUmKCkqLh8UNjsiT/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EADERAAIBAgMECgMAAgMAAAAAAAABAgMRBCExEkFhcQUTMlGBkaGxweEi0fAjQhRSYv/aAAwDAQACEQMRAD8A9oABsOMERlf0IkyUCSQACAAAAAYzmlq7AGQNOpjYx0u/z3nDLaMuCt8STnliqMdZeWZZAqHjanP4Ih4mp+8xY0vpCnuT9P2XAKf9Kn+8/gSsZU/e+CFgsfT7n6fstwVsdoy4pPzRzw2hF63Xx9BY2xxdGX+1ueX16m2RGV8zCNRS0dzOJB08SQAAAAAACGwCQQkSmBYAAAGDkZSQjEARiSAAAAADGrVjFXbsauJxqjlHN8+C/Erpybd27smxxV8ZGnlHN+i/uBt19oN5RVu96mpvtu7d33kEWJK2dac3eT/XlocknfN6cO8wAJMJSuAADAAAAGNyWO8GSssxFtcTco4+S+t7y+JqAgyhVnB3i7F1RrRno/DichQp2zWRv4bH8J+ZFizo42Msp5Pv3fRvgNAg7gREkhoEkkJBIkAAAEAAAAAAArcXjL+7HTi+fTuGOxV/djpxfPu6GmSkVmLxd7wg+b+F/emogEmRXAAAgAAAgkEAkkAAAAAgAAAAAEmzhMY4ZPOPp0LSLTV0UJtYLE7js/qv4d5DR3YXF7H4T03Pu+vblpagAxLYAAAAAAAAAGpj8RurdWr17kbNWainJ8CklJttvVko4sZX2I7K1fov29CCASZFQAAAAACAAAAUm3e1ODwX21VKXCEffqP+SOi73ZHXPaR2zeEX6PRdq0leU8n9FF6W4b7+Cz4q/jNarKcnKTbbd222229W282+81TqbOSLbBdGOtHrKjsty3v9L3PWq3tWU5bmGwdWq3opNKXhCmpt+Zf4HtTUp0nX2hTp4SFvcUqrdWb1sqe7fThrloeFYXG1Kd3Tqzpt67k5wv13Wrm5gNrSpVPp5U4V6is4uv8AS1N1rR23lveN7GCqvedtXouFrQj6tyfm1GN+T5HvNfbcH+j01vwni1PcuoqdNKjKo5Sg75r3Vbm0cPYvtD+m0W5pRq0pujWitFOP7Uf4X+K4Hk+ze2MlXnj8Q5Va8YSp0IpJU4OSa3nn7sUm1ZXb3nfmdn9iVGf/ANNZ3cZOEL/vTjvSl/7X9RnGpdpI4q2B6qhJy1Wz4tt3S71ZxXFp2PUgAbSpBAJBIAABvbOxH7D8CwKFMucNW34346PqYstcFX2l1b1WnL69uRygAg7wAAAAYVJ2TfLMA0NpVbtRXDN9fz6mmKl27vjnwIRkUFabnNyf93ehIAJNIAAAAAAKbtL2io4Gk6tW9292EFbeqS5L5vgXDds3lxPnjtz2geOxM6ibdON6dKPBQXFLnJ5+KXAwnPZRYYHB9fO0tFm/14+yZV7W2hPEVqlep9apJzfdfSK7krLwNQ7xtD2bV4xjKjUjUe6t+Mvcalb3t16NX528Siq9kNoR1ws39105f+ZM4tuL3nrOrcVaxSBMvaHZDaE3ZYaa75OnFf3SR2HZHs1qNqWJqqK/cp+9J9ZtWj4Jhyit5KhJ7jpuycC8RXp0VOMHUmoKUnaMb8/RLi2lxPorYWyKeDowoUl7sFq9ZSecpS72zwXtnsiGFxUqVO+44xqRTbbSkneLb1zTzPXPZrt+eLwyhVd61K0HzlC36uo+9pNPm4t8TfQkil6YpVHBSTyTzXHc/jy7zt4IasEdJ51qxIABAAAANnZ9XdlbhLLx4GsCDOnNwkpLcXxEXfM4qNXein3f7OWJieiTurokAAA1NoVN2NubX4m2Vu1JXklyz80Sc+Jls0pW5eZrN3zenLmYEEklLKVwACTAAAAGKaJaD5sGS7zr3b/GujgMRJOzdP6JPjeo1Tuum82eL9i9jSxeKhG36um1VqPgoxd1HrJq3S/I9T9rE08HOnndblXwjPJevkcXYXZ0aGDo2XvVIqvN8W6i3lfoml4HHiaiTsuXyeo6GoNUdqS7Tv4LJet/AvyADgL4AAA849rGy5b1PFRV47v0M3yablBvue9JX6czH2TYuUMdlnGpQcXycoKDz5NWl5nomNwkKsJUqkVKE04yT4p+j7zo/s/2QsLj68ZOTdKSpR0tKNW7hKStra2nOR1UKiTV9xX4+k5UZ7K1T81meuyd834IxIJLE8TKVwAAYgAAAxuSx3gyTSzLDZU8nHlmvH/RvlTs6VprvTXwv8i2MWXODntUlwy/vAAAg6gVG0H778F8EW5T4z68upK1OHHv/Glx+GcIAMioAABIAAAAAIOp9v8AZ8qtCpb9qlKmvvWco/H0OXZiSo0ktFTgl/SjsOJw8ZxcJaPzXeipdBU7U1pFKK6JZFfiqbT2tz97fR6zoXFxqUupfaivON/hu3kDEEnIXZBkCAAVWCwO9jKkkvrOlfpTinf+6xaosMFg4wblrKWvd3I30KbnLhvK/pLFxw1H/wBO6jz0v4X87G6AC0PEEEggEkkAkAAAEHJhXacepdMoqevj8y+Ziy16P7MlxIABBYAp8X9eXUuCox699+D+CJWpw49f41z+GcAAMioAABIAAAAAIBobRpaS8H8jfMZxTVn0NdSCnFxOrB4l4etGqt2q708n6acbFGZHJXpODs/DvOIqWmnZnu4TjOKlF3TzTJIBnCLk7LUGTaSu9DkwVLel3LNlscOHpKKtx4nMWdCl1cc9d54npPGf8qtePZWS+X4+1r5gAG8rgCCQSQSCACQACCYarqvUvmUeGV5R6/Mu2Ystej1+MnxAAILAFbtSPvJ816f7LI1NqQvG/J+uX4Eo5sXHaoy4Z+X1crCEwDIpWrLMkAAxAAAABAJ1JAcbflEIBqxwYuKcG3wjKXkigp42D1yf54m52v2g6GFqTTs5fq4vjeeV10V34HV9h7fo17QrKMKml9Iz6Pg+7yK/GW21yPW9AUqjw05/67Vl4LNrhmr8S9njYLR36FzstqUFO2bvfza+R1Lbe1qGFVlFSqvSGtu+fJfF/EsOwe2ZYinOM3ecZt8vclnGy5JqS8jHCNdZn3f3obem6NR4PbXZUlfis15bWydqAILI8aSQncBAlqyJAAMQAAAARa4JSubOAjea7rv5fMtiv2bTau+i4dWb6Ziy6wcNmlzbfx8EgAg6gcdRbya5qxm0RFcwOZRuNm+oNvaNK0t7hL1NQyPPVYOE3F7gACTWAAAQ2dfx/bXA0b3rKbTs1TTqWfJuOS8zovtK7UTq1ZYSlJqlD3aln9pP9qL/AIVpbi0+SOj06ji8ujXBrk0ZqPed1HC3W1JnrWP9pdFQ+khQlK91FTlGF++0d7I6nj/aRjql9z6Okv4YbzXjNtfA6jUqOTz6JcEuSMLGSikdLpU0tDsm0Nr4iuk6tSc0ves23FO2qisk8+RqSfAQ0XT5ERjYoZdpn0OjBRglBJKy0y3cCN53z48eZt7P2hWoycqVSUHazcW1fjZrR+JrtEQVmupF7Zo2bCl+MldPvz98i3wHtHx8LKTp1fvws/ODS+B2TZ/tOg/t6EoW4wnGafPKSjZ918zy2nKzucuJxDm7vuu7K7fN/nIv5RVz5uqNNpOx7TgO3Wz6zUVX3G+FSLh/c/d+J2SMk1dZp53Pms7n7O+1E8PWhh6km6FSSgk/+KcnaLjyi27NaZ353xcTnq4VJXh5HsYAMDhAAAAjKwObB0d6XctfkDOnFykorf8A33yLPDwtFX1tfzOVIJAwPRJJJJAAAAAAHHXpb8XHy6lK1bJ8Mi+NHaOH/bXiSjhxtHajtrVe30V4AMipAIJQIZ82VqrnKU5O7k3Jvm27v1MCESbi8YDAYRi9C6jmlzsvHL1BEdI9F6Mz16+v+Sgl2nzPocOyuSMTKKzXVEJBarqjF6GyOqKNMkA9Ez5xHRAN2zXUEVNH0IMkfSeGm5QjJ6uKb8Uchw4L7OH3I+iOY0lICASAC3wlHcjnq83+BqbOw93vvRad7LIxZZ4GhZdY9+nLv8d3DmAAQWIAAAAAACYABVY7Dbjuvqv4dxql/KKasyqxeEcM1nH06mSZVYvC7H5w03ru+vblprABElez5oRIBuLsBgMEPQuIaR6fJmaRjTWUei+Zk2UE+0+Z9Cp9iPJewefX1/yI6rqQZRza538/8mL0NsdUUbBMtX0IPQnzkEVNH0JIqaPoSiUfSOC+zh9yPojlOHBfZw+5H0RzmgpAcuFw7m+5av5IYXDub5Li/wAC3pwUVZaENnZhcL1n5S7Pv9d5KSSstCQDEuAAAAAAAAYtgGQMd0lMEkgAEGhicDxh/SV5fnFXw8Z6rPnxJTOCvgVLOnk+7d9e3I+UGwd37SezLG4a86K/SKSzvTX6xL+Klq/5b+B0pxabi1Zp2aeTTWqa4M3pp6G+SaEItuyV28rCUbOz/wAefFFjQoxpx3m03rdW70kr6aN30la3XQxFTek5c/zpw6cCVqQ1ZFpF5Lp8mZGMNF0+TMigl2nzPoFPsR5L2BMdUQSjF6G1alPVefkYGdbV/ngbGGou6jHObV1ygrXu++3l109AnkfPJL8maYk8n0N/FxqUmlUakn8fG17rmdg2D7Ocdi2mofQ0n/y1U4u38NP60n5J8xtW1Ci3oew4L7OH3I+iLPDYFvOWS5cX+Bz4HBRpRitXFKN+itkuBtmhs5qOBSd6mfDd49/tzIiklZaEgEFgACJMAiT8zJGCVzMEgAAgEIkNAIEJBIkEtgAAgAAANlRtfYGFxWdajGUrWU7btRLkqkbSXS5bNEJAk8z2x7IaU7/o2IlTu97cqRU43+9GzXjc6ftD2V7TpfUhTrL/AK6kU/Kpu/M9+BmptGtwTPnmp2Yx0LKWFrZJaQlJecU0astl11rQqLrTqL1R9IA4nhU3e5dw6ZqRSTgsuL+z5vjsyu9KNR9ITfyNuh2cxs37uFrPrSqRXm0kfQoI/wCIv+xm+m6m6C839HgGE9mO1Kzu6UKSds6lSHpDefwO3bH9k27ONSviXdRit2lFK9kk7zne6/lR6iQ0du0yj2Vdsp9mdmMHh2pU6MN9aTkt+a52lK+7pwsXISBiSAAAAAARJmKzMpK5KQJISJABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Livraison · Maintenant</Text>
                    <Text className="font-bold text-xl">
                        Amiens - centre ville
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>
            {/* recherche */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 flex-1">
                <View className="flex-row flex-1 space_x_2 bg-gray-200 p-3 ">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder=" Restaurants, commerces, plats"
                        keyboardType='default' />
                </View>
                <AdjustmentsIcon color="#00CCBB" />
            </View>
            {/* corp de de l'écrant */}
            <ScrollView className="bg-gray-100 flex-1">
                {/* catégories */}
                <Categories />

                {/* mis en avant part l'application */}

                <FeatureRow className="bg-gray-100 flex-1"
                    id="1"
                    title="Populaires dans votre quartier"
                    description=""
                />
                <FeatureRow className="bg-gray-100 flex-1"
                    id="2"
                    title="A la une"
                    description="Annonces payantes de nos partenaires"
                />
                <FeatureRow className="bg-gray-100 flex-1"
                    id="3"
                    title="Favoris les plus populaires"
                    description="Ces adresses sont très populaires"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

//////////////////////////////////////////////////
/////////////////////////////////////////////////////
//stop a 1:45    https://www.youtube.com/watch?v=taPz40VmyzQ&t=998s
/////////////////////////////////////////////////////
////////////////////////////////////////////////////