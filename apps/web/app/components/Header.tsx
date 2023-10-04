import Image from 'next/image'
import logo from '../../public/images/logo.svg'
import Link from 'next/link'


export default function Header(): JSX.Element {

    return (
        <header className="">
            <nav className="p-4">
                <ul className="flex justify-between items-center px-4">
                    <li>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt='Logo Livebank image'
                                width={95}
                                className='bg-primary rounded-lg hover:bg-primary-hover'
                            />
                        </Link>
                    </li>
                    <li className='bg-primary p-2 rounded-md font-semibold hover:bg-primary-hover'>
                        <button>Open my account</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}