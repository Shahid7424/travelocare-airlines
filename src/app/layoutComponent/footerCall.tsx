import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Caller } from '../utils/images'

const footerCall = () => {
    return ( 
        <div id="back-top" className="back-to-top">
            <Link href="tel:16176694209">
                <span className="d-flex align-items-center">
                    <figure className="flex-shrink-0 mb-0">
                        <Image alt="call support" src={Caller} className="img-fluid" 
                        width="48" height="48" />
                    </figure>
                    <p className="flex-grow-1 ms-3 small mb-0 p-0 text-dark">For New Booking, Changes, Cancellation &amp; Last
                        minute deals Call us now save extra 25% off
                        <span style={{ color: '#ec7e1b' }}> 16176694209</span>

                    </p>
                </span>
            </Link>
        </div>
    )
}

export default memo(footerCall);