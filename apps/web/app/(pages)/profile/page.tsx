'use client'

import { IAccount, IUser } from 'next-auth'
import Header from '../../components/header'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import { FaUser } from "react-icons/fa";

export default function Profile() {
  const [data, setData] = useState<IAccount>()
  const [user, setUser] = useState<IUser>()

  console.log(user?.image)
  async function handleUploadPic(event) {
    const token = await getSession()

    const header = {
      Authorization: "Bearer " + token?.access
    }

    const selectedFile = event.target.files[0]
    const formData = new FormData()
    formData.append("image", selectedFile)

    api.patch(`/auth/${user?.id}/`, formData, { headers: header })
      .then((response) => console.log(response.data))
      .catch(error => console.log(error))
  }

  async function getUser() {
    const token = await getSession()
    const config = {
      headers: {
        Authorization: `Bearer ${token?.access}`,
      },
    };
    const bodyParameters = {

    };
    const response = await api.post('/auth/get/', bodyParameters, config)
    const { data } = await api.get(`/account/${response.data.id}`, config)
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
          <div className='border border-full'>
            <img src={user.image} alt='Profile image' />
            {/* <Image src={user.image} alt='User profile image' width={100} height={100} /> */}
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
              <input type="text" disabled={true} className='bg-gray-200 rounded-md px-2 py-1' value={data?.agency} />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold'>Account number</label>
              <input type="text" disabled={true} className='bg-gray-200 rounded-md px-2 py-1' value={data?.number} />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold'>Balance</label>
              <input type="text" className='bg-gray-200 rounded-md px-2 py-1' value={`R$ ${data?.balance}`} />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label className='font-semibold'>Full name</label>
              <input type="text" disabled={true} className='bg-gray-200 rounded-md px-2 py-1' value={user?.name} />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold'>E-mail</label>
              <input type="text" disabled={true} className='bg-gray-200 rounded-md px-2 py-1' value={user?.email} />
            </div>
          </div>
          {/* <Image src={} alt='User image'/> */}


        </div>
      </div>
    </>
  )
}