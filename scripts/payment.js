document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('payment-method');
    const detailsLi = document.getElementById('payment-details');

    function updatePaymentDetails() {
        switch (select.value) {
            case 'card':
                detailsLi.innerHTML = `
                    <div class="containers-row">
                        <div class="container-column">
                            <label for="fname">First Name:</label>
                            <input type="text" id="fname" placeholder="First Name*" class="pay-input"/>
                        </div>
                        <div class="container-column">
                            <label for="Lname">Last Name:</label>
                            <input type="text" id="Lname" placeholder="Last Name*" class="pay-input"/>
                        </div>
                    </div>
                    <div class="container-column">
                        <label for="card-number">Card Number:</label>
                        <input type="text" id="card-number" placeholder="Type Card # Here*" class="pay-input"/>
                    </div>
                    <div class="containers-row">
                        <div class="container-column">
                            <label for="exp-date">Exp Date:</label>
                            <input type="text" id="exp-date" placeholder="MM/YY*" class="pay-input"/>
                        </div>
                        <div class="container-column">
                            <label for="cvv">CVV:</label>
                            <input type="text" id="cvv" placeholder="CVV*" class="pay-input"/>
                        </div>
                    </div>
                `;
                break;

            case 'paypal':
                detailsLi.innerHTML = '';
                break;

            case 'apple':
                detailsLi.innerHTML = '';
                break;

            case 'google':
                detailsLi.innerHTML = '';
                break;

            default:
                detailsLi.innerHTML = '';
        }
    }

    select.addEventListener('change', updatePaymentDetails);

    updatePaymentDetails();
});

document.addEventListener('DOMContentLoaded', () => {
    const submitPayment = document.getElementById('payment-submit');
    if (submitPayment) {
        submitPayment.onclick = () => {
            alert("Payment has been submitted");    
            window.location.href = "index.html";
        }
    }
});
