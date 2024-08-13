'use client';
import Image from 'next/image';
import Container from '../components/ui/Container';
import Link from 'next/link';
import { FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SocialSignin from '../components/shared/SocialSignin';

const LoginPage = () => {
  const router = useRouter()
  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      const Login = await signIn('credentials', {
        email: formElements.email.value,
        password: formElements.password.value,
        redirect: false,
      });

      if(Login?.status == 200){
        router.push('/')
      }

      console.log(Login);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Container>
      <div className="grid grid-cols-2 gap-12 my-12">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-2 p-6 rounded-lg">
          <h1 className="text-primary font-semibold text-center mb-3">Login</h1>
          <form onSubmit={handleForm}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full mb-4"
              name="email"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="text"
              placeholder="Your Password"
              className="input input-bordered w-full "
              name="password"
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary w-full">
              Sign in
            </button>
          </form>
          <div>
            <h6 className="my-12 text-center">or signin with</h6>
            <SocialSignin/>
            <h6 className="my-12 text-center">
              New here create an account ?{' '}
              <Link className="text-blue-700" href={'/sign-up'}>
                Sign up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
