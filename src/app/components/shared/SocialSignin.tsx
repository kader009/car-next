'use client';
import { signIn } from 'next-auth/react';
import { BsGoogle, BsGithub } from 'react-icons/bs';

const SocialSignin = () => {
  const handleSocial = async (provider) =>{
    const response = await signIn(provider);
  }
  return (
    <div className="flex items-center justify-center space-x-3">
      <button className="btn flex items-center justify-center text-primary">
        <BsGoogle />
      </button>
      <button className="btn flex items-center justify-center text-primary">
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;
