fetch('https://api.invertexto.com/v1/holidays/2022?token=2086%7CYw5ZCDr35B3VaR2roKdCkQN1MpyYDzHe&state=BA')
.then((data) => data.json())
.then((a) => console.log(a))