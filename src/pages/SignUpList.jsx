import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const SignUpList = () => {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  return (
    <Container>
      <Box p={4}>
        <Box mb={4}>
          <h2>Title</h2>
        </Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.description}</Td>
                <Td>
                  <Button colorScheme="teal" size="sm" onClick={() => navigate("/signup/0")}>
                    See More
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default SignUpList;
