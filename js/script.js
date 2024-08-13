{
    const inCurrencyElement = document.querySelector(".js-inCurrency");
    const outCurrencyElement = document.querySelector(".js-outCurrency");
    const formElement = document.querySelector(".js-form");

    const currencyRate = (currency) => {
        switch (currency) {
            case "PLN": return 1;
            case "EUR": return 4.46;
            case "GBP": return 5.19;
            case "USD": return 3.97;
        };
    };

    const calculateRate = () => {
        const rateElement = document.querySelector(".js-rate");

        const rate = currencyRate(inCurrencyElement.value) / currencyRate(outCurrencyElement.value);

        rateElement.innerHTML = rate.toFixed(2);
        return rate;
    };

    const init = () => {
        formElement.addEventListener("input", calculateRate);
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
        };

        const numberElement = document.querySelector(".js-number");
        const resultElement = document.querySelector(".js-result");

        const rate = calculateRate();
        const result = numberElement.value * rate;

        resultElement.innerHTML = `${result.toFixed(2)} ${nameCurrency(outCurrencyElement.value)}`;
    };

    const endResult = () => {
        formElement.addEventListener("submit", result);
    };

    endResult();
}