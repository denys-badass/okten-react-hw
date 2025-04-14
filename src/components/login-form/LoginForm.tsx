import {useForm} from "react-hook-form";
import {login} from "../../api/api.service.ts";

type LoginProp = {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register} = useForm<LoginProp>()

    const loginHandler = (loginData: LoginProp) => {
        login({...loginData, expiresInMins: 1});
    }

    return (
        <form className='flex flex-col w-[200px] gap-4 justify-center items-center' onSubmit={handleSubmit(loginHandler)}>
            <label htmlFor="username">
                Username
                <input type="text" id='username' className='border-2 border-sky-600 rounded-lg w-full' {...register('username')}/>
            </label>

            <label htmlFor="password">
                Password
                <input type="password" id='password' className='border-2 border-sky-600 rounded-lg w-full' {...register('password')}/>
            </label>

            <button className='bg-sky-600 w-full rounded-lg text-slate-50 h-[32px]'>Login</button>
        </form>
    );
};