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
  styled,
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
  HStack,
} from "@gluestack-ui/themed";
import { useContext, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link, router } from "expo-router";

import { UserContext } from "@/app/userContext";

export default function Home() {
  const initialValues = {
    article: "",
    country: "",
    date: "",
    newsletters: [],
  };

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
    <Center w="$full" px="$10" p="$10">
      <Heading bold size="2xl" flex={1} >
        Welcome Editor!
        <Text p="$4">Create a post or edit your post here.</Text>
      </Heading>
      <Divider marginVertical={10} width="80%" />
      <HStack gap="$10">
        <Button onPress={()=> router.push("/tabs/tab2")}>
          <ButtonText>create post</ButtonText>
        </Button>
        <Button onPress={()=> router.push("/tabs/tab1")}>
          <ButtonText>Draft posts</ButtonText>
        </Button>
      </HStack>
    </Center>
  );
}
