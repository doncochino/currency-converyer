{
    const welcome = () => {
        console.log("Welcome to my currency calculator");
    };

    welcome();

    const inCurrencyElement = document.querySelector(".js-inCurrency");
    const outCurrencyElement = document.querySelector(".js-outCurrency");
    const formElement = document.querySelector(".js-form");

    const calculateRate = (inCurrency, outCurrency) => {
        const PLN = 1.00;
        const EUR = 4.46;
        const GBP = 5.19;
        const USD = 3.97;

        switch (inCurrency) {
            case "PLN":
                switch (outCurrency) {
                    case "PLN": return PLN;
                    case "EUR": return 1 / EUR;
                    case "GBP": return 1 / GBP;
                    case "USD": return 1 / USD;
                };

            case "EUR":
                switch (outCurrency) {
                    case "PLN": return EUR;
                    case "EUR": return EUR / EUR;
                    case "GBP": return EUR / GBP;
                    case "USD": return EUR / USD;
                };

            case "GBP":
                switch (outCurrency) {
                    case "PLN": return GBP;
                    case "EUR": return GBP / EUR;
                    case "GBP": return GBP / GBP;
                    case "USD": return GBP / USD;
                };

            case "USD":
                switch (outCurrency) {
                    case "PLN": return USD;
                    case "EUR": return USD / EUR;
                    case "GBP": return USD / GBP;
                    case "USD": return USD / USD;
                };
        };
    }

    const rate = () => {
        const rateElement = document.querySelector(".js-rate");

        const rate = calculateRate(inCurrencyElement.value, outCurrencyElement.value);

        rateElement.innerHTML = rate.toFixed(2);
    };

    const init = () => {
        formElement.addEventListener("input", rate);
    };

    init();

    const result = (event) => {
        event.preventDefault();
        const nameCurrency = (outCurrency) => {
            switch (outCurrency) {
                case "PLN": return "zł";
                case "EUR": return "€";
                case "GBP": return "£";
                case "USD": return "$";
            };
        }
        const numberElement = document.querySelector(".js-number");
        const resultElement = document.querySelector(".js-result");

        const result = numberElement.value * calculateRate(inCurrencyElement.value, outCurrencyElement.value);

        resultElement.innerHTML = `${result.toFixed(2)} ${nameCurrency(outCurrencyElement.value)}`;
    };

    const endResult = () => {
        formElement.addEventListener("submit", result);
    };

    endResult();
}