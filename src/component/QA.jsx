import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

  function QuestionAnswer(props) {
    return (
      <>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' width={700}>
          {props.topic}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     {props.description}
    </AccordionPanel>
  </AccordionItem>

  </Accordion>
  </>
    )
  }

  export default QuestionAnswer