import React from "react";
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
import { ButtonText } from "@gluestack-ui/themed"; // Import ButtonText if not already imported
import { useDraft } from "../../DraftContext";

// Assuming 'data' is an array of objects where each object represents an article
const data = [
  {
    id: "a",
    title: "Article 1",
    content:
      "To place an order, simply select the products you wanp0: {}t, proceed to checkout, provide shipping and payment information, and finalize your purchase.",
  },
  {
    id: "b",
    title: "Article 2",
    content:
      "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payments through PayPal.",
  },
  // Add more articles as needed
];



export default function Tab2() {
  const { drafts } = useDraft();

 
  // Define a type for an object where each value is an array
  type ObjectOfArrays<T> = {
    [key: string]: T[];
  };

  // Use the generic type to define drafts
  const draftsTyped = drafts as ObjectOfArrays<any>; // Replace `any` with a more specific type if possible

  // Example usage
  console.log('Drafts:', draftsTyped);
  
  return (
    <ScrollView w="$full" p="$10">
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
            {data.map((article) => (
              <AccordionItem key={article.id} value={article.id} width="$full">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => (
                      <>
                        <AccordionTitleText>{article.title}</AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} ml="$3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} ml="$3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent rowGap="$10">
                  <AccordionContentText>{article.content}</AccordionContentText>
                  <Button ml="auto">
                    <ButtonText>upload in aspera</ButtonText>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Text>
      </Center>
    </ScrollView>
  );
}
