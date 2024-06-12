import EditScreenInfo from "@/components/EditScreenInfo";
import { ButtonText } from "@gluestack-ui/themed";
import {
  Heading,
  Center,
  Divider,
  Text,
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  ChevronDownIcon,
  ChevronUpIcon,
  Button,
  ScrollView,
} from "@gluestack-ui/themed";

export default function Tab2() {
  return (
    <ScrollView h="$80" w="$96">
      {" "}
      <Center flex={1}>
        <Heading bold size="2xl" m="$1.5">
          Article Drafts
        </Heading>
        <Divider marginVertical={12} width="80%" />
        <Text pr="$8" width="$full">
          <Accordion
            m="$5"
            width="$full"
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
          >
            <AccordionItem value="a" width="$full">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>Article 1</AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} ml="$3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} ml="$3" />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent rowGap="$10">
                <AccordionContentText>
                  To place an order, simply select the products you want,
                  proceed to checkout, provide shipping and payment information,
                  and finalize your purchase.
                </AccordionContentText>
                <Button ml="auto">
                  <ButtonText>Edit</ButtonText>
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>Article 2</AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} ml="$3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} ml="$3" />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent rowGap="$10">
                <AccordionContentText>
                  We accept all major credit cards, including Visa, Mastercard,
                  and American Express. We also support payments through PayPal.
                </AccordionContentText>
                <Button ml="auto">
                  <ButtonText>Edit</ButtonText>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Text>
      </Center>
    </ScrollView>
  );
}
