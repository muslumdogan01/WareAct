import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoTitle = () => {
    return (
        <Link href="/" className="inline-block">
          <Image
            src="/icons/header/logoTitle.svg"
            alt="title"
            width={92}
            height={15}
            priority
          />
        </Link>
      )
}

export default LogoTitle