import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';

const Navbar = () => {
  const navItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <Container>

    <div className="bg-base-100 text-slate-900">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className='flex flex-col space-y-3 '>
                {
                  navItems.map((item) =>(
                    <Link className='hover:text-primary duration-300 font-semibold' href={item.path} key={item.path}>{item.title}</Link>
                  ))
                }
              </div>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={'/assets/logo.svg'} height={80} width={60} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <div className='flex items-center space-x-5'>
                {
                  navItems.map((item) =>(
                    <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>
                  ))
                }
              </div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex space-x-2 items-center'>

          <Image src='/assets/icons/Frame.png' height={22} width={22} alt='logo'/>
          <Image src='/assets/icons/Frame (1).png' height={22} width={22} alt='logo'/>
          <a className="btn btn-outline btn-primary px-8">Appointment</a>
          </div>   
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Navbar;
