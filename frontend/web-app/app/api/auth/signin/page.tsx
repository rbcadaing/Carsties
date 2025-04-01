import EmptyFilter from '@/app/components/EmptyFIlter'
import React from 'react'

export const dynamic = 'force-dynamic';
export default function SignIn({ searchParams }: { searchParams: { callbackUrl: string } }) {
    return (
        <EmptyFilter title='You need to be logged in to do that' subtitle='Please click Below to Login'
            showLogin
            callbackUrl={searchParams.callbackUrl}>

        </EmptyFilter>
    )
}
