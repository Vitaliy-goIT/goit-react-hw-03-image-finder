import { Box } from 'components/Box';
import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    </Box>
  );
};
