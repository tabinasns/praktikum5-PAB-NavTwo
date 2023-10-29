import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import { Box, Center, Heading, Text, Image, ScrollView } from "@gluestack-ui/themed";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <Header title={"News"} withBack={true} />
            <ScrollView>
                <Image 
                    source={{ uri: params.image }}
                    w="$full"
                    h={185}
                    alt="Image Data"
                />
                <Box p={"$3"} 
                    borderBottomColor={"$coolGray300"}
                    borderBottomWidth={1}
                >
                    <Text>{params.date}</Text>
                    <Heading>{params.title}</Heading>
                </Box>
                <Box p={"$3"}>
                    <Text>{params.content}</Text>
                </Box>
            </ScrollView>
            {/* <Center flex={1} padding={"$4"}>
                <Heading>News Detail</Heading>
                <Text textAlign="center">{params.title}</Text>                
            </Center> */}
        </>
    );
};

export default NewsDetail;