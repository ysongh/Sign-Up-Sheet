import { useState } from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';

const SignUp = () => {
  const [data, setData] = useState([
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3'],
  ]);

  const handleCellChange = (rowIndex, colIndex, newValue) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = newValue;
    setData(newData);
  };

  return (
    <Container>
      <Heading mb="5">Sign Up</Heading>
      <Box flex>
        {data.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <Box
              key={`cell-${rowIndex}-${colIndex}`}
              p={2}
              mb={2}
              borderBottomWidth="1px"
              borderRightWidth="1px"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleCellChange(rowIndex, colIndex, e.target.textContent)}
            >
              {cell}
            </Box>
          ))
        ))}
      </Box>
    </Container>
  );
};

export default SignUp;
