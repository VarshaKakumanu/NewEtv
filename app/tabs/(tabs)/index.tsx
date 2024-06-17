import {
  Heading,
  Button,
  ButtonText,
  Center,
  Divider,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useContext } from "react";
import { router } from "expo-router";


export default function Home() {


  return (
    <Center w="$full" px="$10" p="$10">
      <Heading bold size="2xl" flex={1}>
        Welcome Editor!
      </Heading>
      <Text p="$4">Create a post or edit your post here.</Text>
      <Divider marginVertical={10} width="80%" />
      <VStack gap="$10">
        <Button
          onPress={() =>
            router.push({
              pathname: "/tabs/[id]",
              params: { id: "tab2" },
            })
          }
        >
          <ButtonText>create post</ButtonText>
        </Button>
        <Button onPress={() => router.push("/tabs/tab1")}>
          <ButtonText>Draft posts</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}
