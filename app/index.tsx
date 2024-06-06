import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  FormControlErrorIcon,
  FormControlError,
  FormControlErrorText,
  AlertCircleIcon,
} from "@gluestack-ui/themed";

// Define the schema
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(), // No specific validation
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully");
  };

  const [showPassword, setShowPassword] = useState(false);
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
                Email (email)
              </Text>
              <Input>
                <InputField
                  type='text'
                  color='$primary.500'
                  {...register("email")}
                />
              </Input>
              {errors.email?.message &&
                typeof errors.email.message === "string" && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      {errors.email.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
            </VStack>
            <VStack space='xs'>
              <Text color='$primary.500' lineHeight='$xs'>
                Password
              </Text>
              <Input>
                <InputField
                  color='$primary.500'
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <InputSlot pr='$3' onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color='$primary.500'
                  />
                </InputSlot>
              </Input>
              {errors.password?.message &&
                typeof errors.password.message === "string" && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      {errors.password.message}
                    </FormControlErrorText>
                  </FormControlError>
                )}
            </VStack>
            <Button ml='auto' onPress={handleSubmit(onSubmit)}>
              <ButtonText color='$white'>Save</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </Card>
    </Box>
  );
}
