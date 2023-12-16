import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Flex, Spacer, Box, Button, Heading } from '@chakra-ui/react';

import { getNameByListId, addName } from '../supabase';

const SignUp = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchNames();
  }, [])

  const fetchNames = async () => {
    const newNames = await getNameByListId(id);
    newNames.push({ name: ""});
    setData(newNames);
  }
  
  const handleCellChange = (index, newValue) => {
    const newData = [...data];
    newData[index] = newValue;
    setData(newData);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/signup/${id}/`);
  }

  return (
    <Container>
      <Flex>
        <Heading mt="3" mb="5">Sign Up</Heading>
        <Spacer></Spacer>
        <Button colorScheme="teal" mt="4" onClick={copyLink}>
          Share
        </Button>
      </Flex>
      <Box flex>
        {data.map((d, index) => (
          <Box
            key={index}
            p={2}
            mb={2}
            borderBottomWidth="1px"
            borderRightWidth="1px"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleCellChange(index, e.target.textContent)}
          >
            {d.name}
          </Box>
        ))}
      </Box>
      <Button onClick={() => addName(id, data[data.length - 1])} colorScheme="teal" mt="2">
        Add
      </Button>
    </Container>
  );
};

export default SignUp;
