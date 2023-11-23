import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Sign In Page | Next.js E-commerce Dashboard Template',
  description: 'This is Sign In page for TailAdmin Next.js',
}

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <SignIn />
    </div>
  );
};
export default SignInPage;
