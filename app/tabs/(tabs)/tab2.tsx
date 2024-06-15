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
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControlHelper,
  FormControlHelperText,
  VStack,
  ChevronDownIcon,
  Icon,
  Input,
  InputField,
  ScrollView,
} from "@gluestack-ui/themed";
import { useContext, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useLocalSearchParams } from 'expo-router';
import { UserContext } from "@/app/userContext";

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
    date: "",
    newsletters: [],
  };

  const { id } = useLocalSearchParams();
  console.log(id,"iddddddd")

  const user = useContext(UserContext);
  console.log(user, "user");

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (name: string, value: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Values:", e, formValues);
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    handleInputChange("date", currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
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
                  placeholder="Title of the articlke here!"
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
              <Textarea>
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
              {/* <VStack>
              <FormControlLabel>
                <FormControlLabelText>Select place</FormControlLabelText>
              </FormControlLabel>
              <Select
                selectedValue={formValues.country}
                onValueChange={(value) => handleInputChange("country", value)}
                aria-label="Select country"
              >
                <SelectTrigger>
                  <SelectInput placeholder="Country" />
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
                    <SelectItem label="India" value="India" />
                    <SelectItem label="Sri Lanka" value="Sri Lanka" />
                    <SelectItem label="Uganda" value="Uganda" />
                    <SelectItem label="Japan" value="Japan" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </VStack> */}
              {/* <VStack space="xs">
              <Text color="$primary.500" lineHeight="$xs">
                Date
              </Text>
              <Input>
                <InputField
                  type="text"
                  color="$primary.500"
                  style={{ height: 40 }}
                  placeholder="Type here to date!"
                  value={formValues.date}
                  aria-label="Date input"
                  onChange={(e: any) =>
                    handleInputChange("date", e.target.value)
                  }
                />
              </Input>
            </VStack> */}
            </VStack>
          </VStack>

          {/* <VStack space="md">
            <FormControlLabel>
              <FormControlLabelText>
                Sign up for newsletters
              </FormControlLabelText>
            </FormControlLabel>
            <CheckboxGroup
              my="$2"
              value={formValues.newsletters}
              onChange={(value) => handleInputChange("newsletters", value)}
              aria-label="Newsletter sign up"
            >
              <VStack space="sm">
                <Checkbox size="sm" value="Daily Bits">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon>
                      <CheckIcon />
                    </CheckboxIcon>
                  </CheckboxIndicator>
                  <CheckboxLabel>Daily Bits</CheckboxLabel>
                </Checkbox>
                <Checkbox size="sm" value="Event Updates">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon>
                      <CheckIcon />
                    </CheckboxIcon>
                  </CheckboxIndicator>
                  <CheckboxLabel>Event Updates</CheckboxLabel>
                </Checkbox>
                <Checkbox size="sm" value="Sponsorship">
                  <CheckboxIndicator mr="$2">
                    <CheckboxIcon>
                      <CheckIcon />
                    </CheckboxIcon>
                  </CheckboxIndicator>
                  <CheckboxLabel>Sponsorship</CheckboxLabel>
                </Checkbox>
              </VStack>
            </CheckboxGroup>
            <FormControlHelper>
              <FormControlHelperText>
                Subscribe to newsletters for updates
              </FormControlHelperText>
            </FormControlHelper>
          </VStack> */}
          {/* <VStack>
            <Button ml="auto" onPress={showDatepicker}>
            <ButtonText color="$white">Date</ButtonText>
          </Button>
          <Button ml="auto" onPress={showTimepicker}>
            <ButtonText color="$white">time</ButtonText>
          </Button>
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </VStack> */}
          <Button ml="auto" aria-label="Save form" onPress={onSubmit}>
            <ButtonText color="$white">Save</ButtonText>
          </Button>
        </FormControl>
      </Center>
    </ScrollView>
  );
}
