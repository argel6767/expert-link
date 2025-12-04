document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('payment-method');
    const detailsLi = document.getElementById('payment-details');

    function updatePaymentDetails() {
        switch (select.value) {
            case 'card':
                detailsLi.innerHTML = `
                    <div class="container-column">
                        <label for="card-number">Card Number:</label>
                        <input type="text" id="card-number"/>
                    </div>

                    <div class="containers-row">
                        <div class="container-column">
                            <label for="exp-date">Exp Date:</label>
                            <input type="text" id="exp-date"/>
                        </div>
                        <div class="container-column">
                            <label for="cvv">CVV:</label>
                            <input type="text" id="cvv"/>
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
