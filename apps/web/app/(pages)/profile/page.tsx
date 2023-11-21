import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import Header from '../../components/header'


export default async function Profile() {

  const session = await getServerSession(authOptions)

  return (
    <>
      <Header />
      <div className='flex justify-center items-center gap-4'>
        <div>
            
        </div>
        <div className='flex flex-col gap-4'>
          <input type="text" disabled={true} className='bg-gray-200 rounded-md'/>
          <input type="text" disabled={true} className='bg-gray-200 rounded-md'/>
          <input type="text" disabled={true} className='bg-gray-200 rounded-md'/>
        </div>
        <div className='flex flex-col gap-4'>
          <input type="text" disabled={true} className='bg-gray-200 rounded-md'/>
          <input type="text" disabled={true} className='bg-gray-200 rounded-md'/>
          <input type="text" disabled={true} className='bg-gray-200 rounded-md'/>
        </div>
      </div>
    </>
  )
}