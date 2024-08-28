import { Button, Flex, Input, VStack } from "@chakra-ui/react"
function App() {
  return (
    <Flex>
      <VStack>
        <Input variant='filled' placeholder="Test" />
        <Button colorScheme="orange" />
      </VStack>
    </Flex>
  )
}

export default App
