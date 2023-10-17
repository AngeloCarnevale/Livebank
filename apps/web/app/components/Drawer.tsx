import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    CircularProgress
} from '@chakra-ui/react'
import { Button, Input, FormLabel, FormControl } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'


export default function Register({text}: {text:string}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const signUp = async () => {
        setLoading(true)
        try {
            
        } catch (e){
            console.log(e)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Button className='bg-primary text-black font-bold hover:bg-primary-hover py-2 rounded-md w-full' ref={btnRef} colorScheme='yellow' onClick={onOpen}>
                {text}
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody display={'flex'} flexDirection={'column'} gap={30}>

                        <FormControl variant="floating" id="first-name" isRequired>
                            <Input placeholder="" />
                            <FormLabel>First name</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="email" isRequired>
                            <Input placeholder="" onChange={(e) => setEmail(e.target.value)} type='email' />
                            <FormLabel>E-mail</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="password" isRequired>
                            <Input placeholder="" type={'password'} onChange={(e) => setPassword(e.target.value)} />
                            <FormLabel>Senha</FormLabel>
                        </FormControl>

                    </DrawerBody>

                    <DrawerFooter>
                        {loading ? <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }} >
                            <CircularProgress size={30} color='yellow.400' thickness='12px' />
                        </ div>
                            : <>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    onClick={signUp}
                                    className='bg-primary hover:bg-primary-hover'
                                >
                                    Create
                                </Button>
                            </>}

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    )
}