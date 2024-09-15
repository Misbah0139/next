import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex  bg-red-200  gap-8  dark:bg-slate-400'>
    <Link href="\">Home </Link>
    <Link href="\about">About </Link>
    <Link href="\contact">Contact </Link>
    <Link href="\address">Address </Link>
    </div>
  )
}

export default Header