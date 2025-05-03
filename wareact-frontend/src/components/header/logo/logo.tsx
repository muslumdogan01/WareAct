import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/" className="inline-block">
          <Image
            src="/icons/header/logo.svg"
            alt="Company Logo"
            width={42}
            height={36}
            priority
          />
        </Link>
      )
}

export default Logo