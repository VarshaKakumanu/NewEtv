import EditScreenInfo from "@/components/EditScreenInfo";
import {
  Heading,
  Center,
  Divider,
  Text,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";

export default function Tab2() {
  return (
    <Center>
      <Heading bold size="2xl">
        Create articlel
      </Heading>
      <Divider marginVertical={10} width="80%" />
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Create your article</FormControlLabelText>
        </FormControlLabel>
        <Textarea>
          <TextareaInput placeholder="This article is..." />
        </Textarea>
        <FormControlHelper>
          <FormControlHelperText>Start your article</FormControlHelperText>
        </FormControlHelper>
      </FormControl>
    </Center>
  );
}
