import React from 'react'
import Link from "next/link";
import LanguageButton from "@/app/components/LanguageButton";

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <LanguageButton/>
            </nav>
        </header>
    )
}

export default Header