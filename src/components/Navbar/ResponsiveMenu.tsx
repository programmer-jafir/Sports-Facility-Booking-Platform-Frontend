import { AnimatePresence, motion } from 'framer-motion';
import { NavbarMenu } from './NavbarMenue';

const ResponsiveMenu = ({open} : any) => {
    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -100}}
                    transition={{duration: 0.3}}
                    className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                        <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col justify-center items-center gap-10'>
                            {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a 
                    href={item.link}
                    >{item.title}</a>
                  </li>
                  
                );
              })}
              {/* Add a login button here */}
              <li>
                <button
                  className="bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-secondary hover:text-white transition duration-300"
                  onClick={() => console.log('Login button clicked')}
                >
                  Login
                </button>
              </li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default ResponsiveMenu;