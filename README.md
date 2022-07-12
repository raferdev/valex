<p align="center">
  <a href="https://github.com/rafael-f/projeto18-valex">
    <img src="./readme.png" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    Valex
  </h3>
</p>

## About 
This is a simple API to manage vouchers cards vouchers.

## Usage

```bash
$ git clone https://github.com/rafael-f/projeto18-valex

$ cd projeto18-valex

$ npm install

$ npm run dev
```

API:

```
- POST /card/create
    - To create a card
    - headers: {
         "x-api-key" : "API_KEY"
    }
    - body: {
        "cpf": "Lorem ipsum",
        "type": 'groceries' ||'restaurants', 'transport'||'education'|| 'health'
    }

- POST /card/active
    - To active card
    - headers: {}
    - body: {
    "cardNumber": "STRING_LENGTH_16_CARD_NUMBER",
    "password": "STRING_LENGTH_4"
    }

- POST /card/block
    - To block the card
    - headers: {}
    - body:  {
    "cardNumber": "STRING_LENGTH_16_CARD_NUMBER",
    "password": "STRING_LENGTH_4"
    }
- POST /card/unblock 
    - To unlock card
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "cardNumber": "STRING_LENGTH_16_CARD_NUMBER",
    "password": "STRING_LENGTH_4"
    }
- POST /card/transactions/recharge  (autenticada)
    - To recharge card
    - headers: { 
         "x-api-key" : "API_KEY"
     }
    - body: {
    "cardNumber":"STRING_LENGTH_16_CARD_NUMBER",
    "amount": POSITIVE_NUMBER
}
- POST card/transactions/payment 
    - To make payments
    - headers: {}
    - body: {
    "cardNumber":"STRING_LENGTH_16_CARD_NUMBER",
    "password":"STRING_LENGTH_4",
    "businessId": POSITIVE_INTEGER_NUMBER,
    "amount": POSITIVE_NUMBER
    }
- GET /card/transactions
    - Get transactions
    - headers: {}
    - body: {}

```
