import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Button, Heading } from '@chakra-ui/react';

import { addName } from '../supabase';

const SignUp = () => {
  const { id } = useParams();
  const [data, setData] = useState(['A1', 'B1', 'C1']);

  const handleCellChange = (index, newValue) => {
    const newData = [...data];
    newData[index] = newValue;
    setData(newData);
  };

  return (
    <Container>
      <Heading mb="5">Sign Up</Heading>
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
            {d}
          </Box>
        ))}
      </Box>
      <Button onClick={() => addName(id, data[data.length - 1])}>
        Add
      </Button>
    </Container>
  );
};

export default SignUp;
