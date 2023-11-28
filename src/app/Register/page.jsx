import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
//import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
//import background from './public/signup.png';
import Link from "next/link";
import Image from "next/image";

function Auth() {
    return (
        <>
            <div className=' bg-[#007bcb] y-hidden'>
                <a className='absolute z-50 block top-0 m-2' href="">
                    <Image src="/JandPay Logo.png" width={300} height={150} alt="" />
                </a>
                <div className='h-screen w-screen'>
                    <Image className='h-full w-full absolute hidden lg:block' src='/signup.png' width={300} height={150} alt="" />
                </div>
                <div className='flex flex-col w-full items-center justify-center z-500 bg-white rounded-3xl relative top-48 right-0 pb-0 p-2 bottom-0 lg:m-2 lg:shadow-xl  lg:absolute  lg:w-1/2 lg:p-4' >
                    <h1 className='text-3xl font-medium text-center m-4 z-9'>Register</h1>
                    <p className='text-center text-slate-500 text-lg mb-1'>
                        Don&apos;t have an account? create an account, it takes less than a minute
                    </p>
                    <FormControl className='w-full lg:p-8'>
                        <TextField className=' m-2' id="filled-basic" label="First Name" variant="standard" />
                        <TextField className=' m-2' id="filled-basic" label="Last Name" variant="standard" />
                        <TextField className=' m-2' id="filled-basic" label="Email" variant="standard" />
                        <TextField className=' m-2' id="filled-basic" label="password" variant="standard" />
                    </FormControl>
                    <Button className='rounded-full hover:bg-slate-900 w-full text-white bg-slate-800 m-2 p-4' variant="contained">Create Account</Button>
                    <p className='text-slate-500'>Already have an account?, Sign In</p>
                    <Link className='w-full' href='/Sign-In' >
                        <Button className='rounded-full hover:bg-white hover:border-slate-900 w-full mt-2 border-slate-900 text-slate-900 p-4' variant="outlined" elevated>Sign In</Button>
                    </Link>
                    <p className='text-slate-400 text-center mt-2'>By clicking on Create Account or Sign In using JandPay. You agree to our <b>Terms</b> and <b>Privacy Policy</b></p>
                </div>
            </div>
        </>
    );
}
export default Auth