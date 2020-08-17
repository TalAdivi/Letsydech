import React, { Component } from 'react';
import PayPalBtn from './paypalBtn/index'

export default class PaymentExample extends Component {
    paymentHandler = (details : any, data : any) => {
      /** Here you can call your backend API
        endpoint and update the database */
      console.log(details, data);
    }
    render() {
        return ( 
            <div>
                <div>Online Payment Demo</div>
                <PayPalBtn
                    amount = {200}
                    currency = {'USD'}
                    onSuccess={this.paymentHandler}/>
            </div>
        )
    }
}