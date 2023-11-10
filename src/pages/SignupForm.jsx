import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react';

const SignupForm = () => {
  const [title, setTitle] = useState();

  return (
    <Container>
      <Box p={8}>
        <Heading as="h2" size="lg" mb={4}>
          Sign Up
        </Heading>
        <form>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="firstName"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue">
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;
