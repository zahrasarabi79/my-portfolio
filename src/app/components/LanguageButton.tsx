"use client"
import React, {useEffect, useState, useTransition} from 'react'
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";

const LanguageButton = () => {
    const router = useRouter()
    const currentLocale = useLocale()
    const [locale, setLocale] = useState("");
    const [isPending, startTransition] = useTransition()
    const handleChangeLanguage = (event: SelectChangeEvent) => {
        setLocale(event.target.value as string)
    };
    useEffect(() => {
        // change locale to get as correct default value
        startTransition(() => (router.replace(`/${locale}`)))
    }, [locale]);
    return (
        <div>
            <Select
                disabled={isPending}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentLocale}
                label="Age"
                onChange={handleChangeLanguage}
            >
                <MenuItem value={'en'}>en</MenuItem>
                <MenuItem value={'fa'}>fa</MenuItem>
            </Select>
        </div>
    )
}

export default LanguageButton