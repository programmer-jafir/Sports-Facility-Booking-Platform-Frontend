 import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../../redux/features/auth/authApi';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
import bannar from './bannar-img.png'
    const DashboardBannar = () => {
    const currentDate = new Date().toJSON().slice(0, 10);
    // const userId = useSelector(selectCurrentUser)?.id;
    const { data, isLoading, error } = useGetUserQuery();
        console.log(data)

    return ( 
        <div className="p-4">
            <div className="bg-gradient-to-r from-primary to-secondary h-96 rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden">
                
                <div className="flex-1 text-center md:text-left p-5">
                    <h4 className="text-white text-base md:text-lg mb-4">{currentDate}</h4>
                    <h1 className="text-white text-3xl md:text-5xl font-bold pb-3">
                        Welcome back, Jafir!
                    </h1>
                    <p className="text-white text-sm md:text-xl">
                        Always stay connected with us
                    </p>
                </div>

                <div className="flex-1 flex justify-center md:justify-end">
                    <img 
                        className="w-60 md:w-80 lg:w-96 object-contain" 
                        src={bannar} 
                        alt="Dashboard Banner" 
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardBannar;