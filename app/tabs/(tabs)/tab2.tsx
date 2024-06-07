import {
  Heading,
  Center,
  Divider,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
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
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function Tab2() {
  const [values, setValues] = useState([""]);
  return (
    <Center w="$full">
      <Heading bold size="2xl">
        Create article
      </Heading>
      <Divider marginVertical={10} width="80%" />
      <FormControl w="$full" h="$96" p="$10">
        <VStack>
          <FormControlLabel>
            <FormControlLabelText>Create your article</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="This article is..." />
          </Textarea>
        </VStack>
        <VStack>
          <FormControlLabel>
            <FormControlLabelText>Select place </FormControlLabelText>
          </FormControlLabel>
          <Select>
            <SelectTrigger>
              <SelectInput placeholder="Country" />
              <SelectIcon >
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
        </VStack>

        <VStack>
          <FormControlLabel>
            <FormControlLabelText>Sign up for newsletters</FormControlLabelText>
          </FormControlLabel>
          <CheckboxGroup
            my="$2"
            value={values}
            onChange={(keys) => {
              setValues(keys);
            }}
          >
            <VStack space="sm">
              <Checkbox size="sm" value="Mango">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon>
                    <CheckIcon />
                  </CheckboxIcon>
                </CheckboxIndicator>
                <CheckboxLabel>Daily Bits</CheckboxLabel>
              </Checkbox>
              <Checkbox size="sm" value="Apple">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon>
                    <CheckIcon />
                  </CheckboxIcon>
                </CheckboxIndicator>
                <CheckboxLabel>Event Updates</CheckboxLabel>
              </Checkbox>
              <Checkbox size="sm" value="Orange">
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
        </VStack>
      </FormControl>
    </Center>
  );
}
