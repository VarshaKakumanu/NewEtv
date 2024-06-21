import {
  Heading,
  Button,
  ButtonText,
  Center,
  Divider,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Text,
  Textarea,
  TextareaInput,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  VStack,
  ChevronDownIcon,
  Icon,
  Input,
  InputField,
  ScrollView,
} from "@gluestack-ui/themed";
import { useState } from "react";

import { useLocalSearchParams } from "expo-router";
import { useDraft } from "@/app/DraftContext";
export const indianStates = [
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
  { label: "Assam", value: "Assam" },
  { label: "Bihar", value: "Bihar" },
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  { label: "Goa", value: "Goa" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Haryana", value: "Haryana" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Kerala", value: "Kerala" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Manipur", value: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram" },
  { label: "Nagaland", value: "Nagaland" },
  { label: "Odisha", value: "Odisha" },
  { label: "Punjab", value: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Telangana", value: "Telangana" },
  { label: "Tripura", value: "Tripura" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "West Bengal", value: "West Bengal" },
  // Add more states if needed
];

export default function Tab1() {
  const initialValues = {
    title: "",
    article: "",
    author: "",
    country: "",
  };
  const { saveDraft } = useDraft();

  const { id } = useLocalSearchParams();

  console.log(id, "iddddddd");

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (name: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    saveDraft(id as string, formValues);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <ScrollView p="$10" w="$full">
      <Center w="$full" px="$10">
        <Heading bold size="2xl">
          Create Article
        </Heading>
        <Divider marginVertical={10} width="80%" />

        <FormControl as="form" w="$full" h="$96" p="$10">
          <VStack gap="$2.5" pb="$4">
            <VStack space="md">
              <FormControlLabel>
                <FormControlLabelText>Title</FormControlLabelText>
              </FormControlLabel>

              <Input>
                <InputField
                  type="text"
                  color="$primary.500"
                  style={{ height: 40 }}
                  placeholder="Title of the article here!"
                  onChange={(e: any) =>
                    handleInputChange("title", e.target.value)
                  }
                  defaultValue={formValues.title}
                />
              </Input>
            </VStack>
            <VStack space="md">
              <FormControlLabel>
                <FormControlLabelText>Create your article</FormControlLabelText>
              </FormControlLabel>
              <Textarea
                size="$full"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
              >
                <TextareaInput
                  placeholder="This article is..."
                  value={formValues.article}
                  onChange={(e: any) =>
                    handleInputChange("article", e.target.value)
                  }
                  aria-label="Article content"
                />
              </Textarea>
            </VStack>
            <VStack space="md" w="$full">
              <FormControlLabel>
                <FormControlLabelText>Author</FormControlLabelText>
              </FormControlLabel>

              <Input>
                <InputField
                  type="text"
                  color="$primary.500"
                  style={{ height: 40 }}
                  placeholder="~ author"
                  onChange={(e: any) =>
                    handleInputChange("author", e.target.value)
                  }
                  defaultValue={formValues.author}
                />
              </Input>
            </VStack>
            <VStack space="md" w="$full">
              <VStack>
                <FormControlLabel pb="$2.5">
                  <FormControlLabelText>Select place</FormControlLabelText>
                </FormControlLabel>
                <Select
                  selectedValue={formValues.country}
                  onValueChange={(value) => handleInputChange("country", value)}
                  aria-label="Select State"
                >
                  <SelectTrigger>
                    <SelectInput placeholder="State" />
                    <SelectIcon>
                      <Icon as={ChevronDownIcon} />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      {indianStates.map((state) => (
                        <SelectItem
                          key={state.value}
                          label={state.label}
                          value={state.value}
                        />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </VStack>
            </VStack>
          </VStack>

          <Button ml="auto" aria-label="Save form" onPress={onSubmit}>
            <ButtonText color="$white">Save</ButtonText>
          </Button>
        </FormControl>
      </Center>
    </ScrollView>
  );
}
