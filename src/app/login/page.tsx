'use client';
import Image from 'next/image';
import Container from '../components/ui/Container';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { FormEvent } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
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
            <div className="flex items-center justify-center space-x-3">
              <button className="btn flex items-center justify-center text-primary">
                <BsGoogle />
              </button>
              <button className="btn flex items-center justify-center text-primary">
                <BsGithub />
              </button>
            </div>
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
