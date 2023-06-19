"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useSession, signIn, signOut, getProviders} from "next-auth/react"

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-5 pl-6'>
    <Link href='/' className='flex gap-2 flex-center'>
      <Image
        src='/assets/images/logo.jpg'
        alt='logo'
        width={40}
        height={40}
        className='object-contain'
      />
    
    </Link>
    </nav>
  )
}

export default Nav