import React from 'react'

export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'action': ''}>Sign-In</div>
            <div className={props.step2 ? 'action': ''}>Shipping</div>
            <div className={props.step3 ? 'action': ''}>Payment</div>
            <div className={props.step4 ? 'action': ''}>Place Order</div>
            
        </div>
    );
}
