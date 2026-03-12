import React from 'react';
import { Hero } from '../component';

const TermsAndConditions = () => {
    return (
        <>
            <Hero title="Terms and Conditions" description="" />
            <div className="container mt-4 terms">
                <div className="mb-4">
                    <h1 className="main-heading ">1. FLIGHT TICKETS</h1>
                    <h2 className="sub-heading ">TERMS OF THE AIRLINES</h2>
                    <ul className="list-unstyled" >
                        <li className='' >The airline tickets available through the Website are subject to the terms & conditions of the concerned airline, including but not limited to cancellation and refund policies.</li>
                        <li>Travelocare merely acts as a facilitator to enable the User to book a flight ticket. The contract of service for utilization of the flight is always between the User and the concerned airline.</li>
                        <li>Airlines retain the right to reschedule flight times, route, change or cancel flights or itineraries independent of and without prior intimation to Travelocare. As a facilitator, Travelocare has no control or authority over the logistics of the airlines and therefore is not liable for any loss, direct or incidental, that a User may incur due to such change or cancellation of a flight.</li>
                        <li>Different tickets on the same airline may carry different restrictions or include different services and price.</li>
                        <li>The baggage allowance on given fare is as per the terms decided by the airline, and Travelocare has no role to play in the same. Some of the fares shown in the booking flow are “hand baggage fares” which do not entitle the User for free check-in baggage and therefore the User will be required to pay separately for check-in baggage. The prices for adding check-in baggage to a booking may vary from airline to airline. The User is advised to contact the airlines for detailed costs.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">CODE SHARE</h2>
                    <ul className="list-unstyled">
                        <li>Some airlines enter into &quot;code share&quot; agreements with other Airlines. This means that on certain routes, the airline carrier selling or marketing the flight ticker does not fly its own aircraft to that destination. Instead, it contracts or partners with another airline to fly to that destination. The partner airline is listed as &quot;operated by&quot; in the booking flow.</li>
                        <li>If your flight is a code share, it will be disclosed to you in the booking process and prior to payment.</li>
                        <li>Travelocare will disclose any such code-share arrangements to the User, only when the ticketing airline discloses it to Travelocare in the first place.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">PRICING</h2>
                    <ul className="list-unstyled">
                        <li>The total price displayed on the Website on the payment page usually includes base fare, applicable government taxes and convenience fee. Users are required to pay the entire amount prior to the confirmation of their booking(s). In the event the User does not pay the entire amount, Travelocare reserves its right to cancel the booking. User agrees to pay all statutory taxes, surcharges and fees, as applicable on the date of travel.</li>
                        <li>To avail infant fares, the age of the child must be under 24 months throughout the entire itinerary. This includes both onward and return journeys. If the infant is 24 months or above on the return journey, User will be required to make a separate booking using a child fare. Any infants or children must be accompanied by an adult as per the terms of the airlines.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">TRAVEL DOCUMENTS</h2>
                    <ul className="list-unstyled">
                        <li>It shall be the sole responsibility of the User to ensure they are in possession of valid travel documents such as identity proof, passport, visa (including transit visa) etc. to undertake the travel. User agrees that in case of inability to travel for not carrying valid travel documents, Travelocare shall in no way be held liable.</li>
                        <li>User understands that the information (if any) provided by Travelocare regarding the travel documents is only advisory in nature and can’t be considered conclusive. The User shall ensure checking the requirements of travel with the respective airlines of the respective jurisdictions the User may transit through or choose to visit.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">CHECK-IN TERMS</h2>
                    <ul className="list-unstyled">
                        <li>User should check with the airlines directly regarding the check-in timings. Usually, check-in begins 2 hours before departure for domestic flights, and 3 hours before departure for international flights.</li>
                        <li>User should carry valid identification proofs, passport, age proofs as may be required to prove the identity, nationality and age of the passengers travelling on a ticket, including infants.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">USE OF FLIGHT SEGMENTS</h2>
                    <ul className="list-unstyled">
                        <li>In the event User does not embark on the onward journey, the entire PNR pertaining to that booking shall be automatically cancelled by the airline. In such a scenario Travelocare has no control in the said process nor will be obligated to provide alternate bookings to the User. The cancellation penalty in such an event shall be as per the applicable airline rules.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">CHANGES TO EXISTING BOOKING</h2>
                    <ul className="list-unstyled">
                        <li>Any changes that are made to any existing booking shall be subject to certain charges levied by the respective airline, apart from the service fee charged by Travelocare.</li>
                        <li>The User shall be obligated to pay applicable charges in the event of any alteration or modification to an existing booking. However, depending on the airline&apos;s policy and fare className, charges for changes or modifications to existing bookings may vary.</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="sub-heading">REFUND</h2>
                    <ul className="list-unstyled">
                        <li>Refunds will be processed as per the airline fare rules and cancellation policy. Such refunds shall be subject to Travelocare receiving the same from the airlines. However, the convenience fee paid to Travelocare paid at the time of booking is a non-refundable fee.</li>
                        <li>All cancellations made directly with the airline need to be intimated to Travelocare, in order to initiate the process of refund. The processing time for refunds may vary depending on the mode of payment, bank etc. The refund shall be processed after deducting the Travelocare service fee which is independent of the convenience fee as mentioned above.</li>
                        <li>The refund will be credited to the same account from which the payment was made. For example, if the User used a credit card, Travelocare will make an appropriate charge reversal to the same credit card; likewise, if the User used a debit card, ReservatinKart will credit the money to the same debit card.</li>
                        <li>In the event of cancellation and refund of partially utilized tickets, upfront discount and promo code discount availed at the time of booking would be deducted from the refund amount.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;
