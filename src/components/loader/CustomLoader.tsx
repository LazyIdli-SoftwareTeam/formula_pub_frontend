import { CircleLoader, ClipLoader } from 'react-spinners';
const CustomLoader: React.FC<{
    color?: string;
}> = ({ color = 'black' }) => {
    return <CircleLoader color={color} size={150} loading={true} />;
};

export const FullScreenLoader = () => {
    return (
        <div
            style={{
                position: 'absolute',
                zIndex: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                top: 0,
                left: 0,
                backgroundColor: 'black',
            }}
        >
            <CustomLoader color="white" />
        </div>
    );
};


export const ClipLoaderSmall = () => {
    return <ClipLoader color='white' size={50} loading />
}
export default CustomLoader;
