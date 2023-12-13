import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { getList } from '../supabase';

const SignUpList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, [])

  const fetchList = async () => {
    const newList = await getList();
    setList(newList);
  }

  return (
    <Container>
      <Box p={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.title}</Td>
                <Td>{item.description}</Td>
                <Td>
                  <Button colorScheme="teal" size="sm" onClick={() => navigate(`/signup/${item.id}`)}>
                    View
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
