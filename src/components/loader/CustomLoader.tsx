import { ClipLoader } from 'react-spinners';
const CustomLoader: React.FC<{
  color?: string;
}> = ({ color = 'black' }) => {
  return <ClipLoader color={color} size={150} loading={true} />;
};

export default CustomLoader;
