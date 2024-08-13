'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BsGoogle, BsGithub } from 'react-icons/bs';

const SocialSignin = () => {
  const router = useRouter();
  const session = useSession()
  const handleSocial = async (provider) => {
    const response = await signIn(provider, {redirect: false});
  };
  
  if(session?.status === 'authenticated'){
    router.push('/')
  }
  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocial('google')}
        className="btn flex items-center justify-center text-primary"
      >
        <BsGoogle />
      </button>
      <button
        onClick={() => handleSocial('github')}
        className="btn flex items-center justify-center text-primary"
      >
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;
