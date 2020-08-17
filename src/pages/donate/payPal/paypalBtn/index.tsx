import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

// const PayPalBtn = ({amount, onSuccess, currency}: any) : any => {
//     return (
//         <PayPalButton
//         amount={amount}
//         currency={currency}
//         onSuccess={(details: any, data: any) => onSuccess(details, data)}
//         options={{
//           clientId: "your client id here"
//         }}
//     />
//     )
// }
// export default PayPalBtn;

class PayPalBtn  extends React.Component {
    render() {
      const { amount, onSuccess, currency } :any = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details: any, data : any) => onSuccess(details, data)}
              options={{
                clientId: "your client id here"
              }}
          />
        );
    }
}
export default PayPalBtn;