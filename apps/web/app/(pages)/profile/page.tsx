'use client'

import { IAccount, IUser } from 'next-auth'
import Header from '../../components/header'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { FaUser } from "react-icons/fa";
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const [data, setData] = useState<IAccount>()
  const [user, setUser] = useState<IUser>()
  const router = useRouter()

  async function handleUploadPic(event) {
    const token = await getSession()
    api.defaults.headers['Authorization'] = `Bearer ${token?.access}`
    const selectedFile = event.target.files[0]
    const formData = new FormData()
    formData.append("image", selectedFile)

    api.patch(`/auth/${user?.id}/`, formData)
      .then((response) => console.log(response))
      .catch(error => console.log(error))
      getUser()
  }

  async function getUser() {
    const token = await getSession()
    if(!token) {
      router.refresh()
      router.push('/login')
    }
    api.defaults.headers['Authorization'] = `Bearer ${token?.access}`
    const response = await api.get('/auth/')
    console.log(response)
    const { data } = await api.get('/account/')
    setData(data)
    setUser(response.data)
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <>
      <Header />
      <div className='flex flex-col gap-10 justify-center items-center h-[60%]'>
        {!user?.image ?
          <div className='rounded-full border-2  p-10'>
            <FaUser color='gray' size={30} />
          </div>
          :
          <div className='border rounded-full'>
            <img src={`http://localhost:8000/media/${user.image}`} alt='Profile image' className='rounded-full' width={150}/>
          </div>}
        <input
          type='file'
          id='file'
          accept='.jpg, .jpeg, .png'
          onChange={handleUploadPic}
        />
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label className='font-semibold'>Agency</label>
              <input type="text" readOnly={true} className='bg-gray-200 rounded-md px-2 py-1' value={data?.agency} />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold'>Account number</label>
              <input type="text" readOnly={true} className='bg-gray-200 rounded-md px-2 py-1' value={data?.number} />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold'>Balance</label>
              <input type="text" className='bg-gray-200 rounded-md px-2 py-1' readOnly={true} value={`R$ ${data?.balance}`} />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label className='font-semibold'>Full name</label>
              <input type="text" readOnly={true} className='bg-gray-200 rounded-md px-2 py-1' value={user?.name} />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold'>E-mail</label>
              <input type="text" readOnly={true} className='bg-gray-200 rounded-md px-2 py-1' value={user?.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}