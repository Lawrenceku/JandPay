import Button from '@mui/material/Button';
//import background from './public/signup.png';

function Auth() {
    return (
        <>
            <div className=''>
                <img className='h-full w-full hidden lg:block' src='/signup.png' alt="" />
                <div className='flex flex-col w-full md:w items-center justify-center z-500 lg:absolute relative top-0 lg:w-2/3 lg:p-4 bg-white rounded-lg' >
                    <h1 className='text-3xl font-medium text-center m-8 z-9'>Enjoy Seamless cross-border </h1>
                    <p className='text-center text-slate-500 text-lg mb-8'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                        minima deleniti? Quos ipsam inventore non quisquam, quasi nesciunt perferendis culpa blanditiis?
                    </p>
                    <Button className='rounded-full hover:bg-slate-900 w-full text-white bg-slate-800 m-2 p-4' variant="contained">Get Started</Button>
                    <Button className='rounded-full hover:bg-white hover:border-slate-900 w-full m-2 border-slate-900 text-slate-900 p-4' variant="outlined" elevated>Log In</Button>
                    <p className='text-slate-400 text-center m-2'>By clicking on Create Account or Sign In using JandPay. You agree to our <b>Terms</b> and <b>Privacy Policy</b></p>
                </div>
            </div>
        </>
    );
}
export default Auth