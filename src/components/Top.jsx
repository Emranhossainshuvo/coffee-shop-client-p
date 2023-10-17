import top from './../../public/images/more/15.jpg'
import logoTop from './../../public/images/more/logo1.png'

const Top = () => {
    return (
        <div className='mb-16'>
                <img className='h-28 absolute w-full' src={top} alt="" />
                <div className='flex items-center justify-center relative'>
                    <img className='w-20' src={logoTop} alt="" />
                    <h4 className='text-6xl font-normal text-white font-rancho'>Espresso Emporium</h4>
                </div>
        </div>
    );
};

export default Top;