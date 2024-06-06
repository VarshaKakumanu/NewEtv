import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  VStack,
  Card,
} from "@gluestack-ui/themed";

// No schema needed since we are removing Zod validation

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    const formData = { email, password };
    console.log(formData);
    alert("Form submitted successfully");
  };

  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  return (
    <Box
      backgroundColor='$white'
      justifyContent='center'
      h='$full'
      w='$full'
      sx={{
        "@base": {
          py: "$5",
        },
        "@md": {
          mx: "auto",
          px: "$72",
        },
        "@lg": {
          mx: "auto",
          px: "$2/6",
          py: "$5",
        },
      }}>
      <Heading mb='$10' size='2xl' textAlign='center' color='$primary.500'>
        Welcome to EEtv Bharat!
      </Heading>
      <Card size='md' variant='outline' m='$3'>
        <FormControl>
          <VStack space='xl'>
            <Heading color='$primary.500' lineHeight='$md'>
              Login
            </Heading>
            <VStack space='xs'>
              <Text color='$primary.500' lineHeight='$xs'>
                Email
              </Text>
              <Input>
                <InputField
                  type='text'
                  color='$primary.500'
                  style={{height: 40}}
                  placeholder="Type here to translate!"
                  onChangeText={newText => setEmail(newText)}
                  defaultValue={email}
                />
              </Input>
            </VStack>
            <VStack space='xs'>
              <Text color='$primary.500' lineHeight='$xs'>
                Password
              </Text>
              <Input>
                <InputField
                  color='$primary.500'
                  type={showPassword ? "text" : "password"}
                  style={{height: 40}}
                  placeholder="Type here to translate!"
                  onChangeText={newText => setPassword(newText)}
                  defaultValue={password}
                />
                <InputSlot pr='$3' onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color='$primary.500'
                  />
                </InputSlot>
              </Input>
            </VStack>
            <Button ml='auto' onPress={onSubmit}>
              <ButtonText color='$white'>Save</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </Card>
    </Box>
  );
}
