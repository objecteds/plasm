import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => (
    <footer className="text-center bg-black text-white p-20">
        <h1 className="text-xl">sorry i did not complete this in time</h1>
        <br /><br /><br />
        <div className="flex gap-8 items-center justify-center">
            <a href="https://github.com/objecteds/plasm" target="_blank">GitHub</a>
            <Link href="/404">404</Link>
        </div>
    </footer>
)

export default Footer