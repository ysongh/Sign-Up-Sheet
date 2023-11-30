import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

import { addSignUp } from '../supabase';

const SignupForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState('');

  const createSignUp = async () => {
    await addSignUp(title, description);
    navigate("/");
  }

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
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" onClick={() => createSignUp()}>
              Create
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;
