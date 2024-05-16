'use client'
import { Button, TextInput } from 'flowbite-react';
import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input';
import DateInput from '../components/DateInput';
import { createAuction, updateAuction } from '../actions/auctionActions';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Auction } from '@/types';

type Props = {
    auction?: Auction
}

export default function AuctionForm({ auction }: Props) {
    const router = useRouter();
    const pathName = usePathname();

    const { control, handleSubmit, setFocus, reset, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
        mode: 'onTouched'
    });

    async function onSubmit(data: FieldValues) {
        try {

            let id = '';
            let res;
            if (pathName === '/auctions/create') {
                res = await createAuction(data);
                id = res.id;
            } else {
                if (auction) {
                    res = await updateAuction(data, auction.id);
                    id = auction.id;
                }
            }

            if (res.error) {
                throw res.error;
            }
            router.push(`/auctions/details/${id}`);
        } catch (error: any) {
            toast.error(error.status + ' ' + error.message);
        }
    }

    useEffect(() => {
        if (auction) {
            const { make, model, color, mileage, year } = auction;
            reset({ make, model, color, mileage, year });
        }
        setFocus('make');
    }, [setFocus])
    return (
        <form className='flex flex-col mt-3' onSubmit={handleSubmit(onSubmit)}>
            <Input label='Make' name='make' showLabel={true} control={control} rules={{ required: 'Make is required' }} />
            <Input label='Model' name='model' showLabel={true} control={control} rules={{ required: 'Model is required' }} />
            <Input label='Color' name='color' showLabel={true} control={control} rules={{ required: 'Color is required' }} />
            <div className='grid grid-cols-2 gap-3'>
                <Input label='Year' name='year' showLabel={true} control={control} rules={{ required: 'Year is required' }} type='number' />

                <Input label='Mileage' name='mileage' showLabel={true} control={control} rules={{ required: 'Mileage is required' }} type='number' />
            </div>
            {pathName === '/auctions/create' &&
                <>
                    <Input label='Image URL' name='imageUrl' showLabel={true} control={control} rules={{ required: 'Image URl is required' }} />
                    <div className='grid grid-cols-2 gap-3'>
                        <Input label='Reserver Price (Enter 0 if no reserve' name='reservePrice' showLabel={true} control={control} rules={{ required: 'Reserve Price is required' }} type='number' />

                        <DateInput
                            label='Auction end date/time'
                            name='auctionEnd'
                            control={control}
                            dateFormat='dd MMMM yyyy h:m a'
                            showLabel={true}
                            showTimeSelect
                            rules={{ required: 'Auction end date/time is required' }}
                        />
                    </div>
                </>
            }

            <div className='flex justify-between'>
                <Button outline color='gray'>Cancel</Button>
                <Button
                    isProcessing={isSubmitting}
                    disabled={!isValid}
                    type='submit'
                    outline color='success'
                >Submit</Button>
            </div>
        </form>
    )
}
