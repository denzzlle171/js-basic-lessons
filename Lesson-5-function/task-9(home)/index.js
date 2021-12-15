
function countCommision(amount, currency) {
  if ( currency == 'UAH')
      {if ( amount < 1000)
        {return amount * 0.02} else {return amount * 0.01}
  } else if ( currency == 'USD')
        {if ( amount < 5000)
          {return amount * 0.005} else {return amount * 0.0025}
  } else if ( currency == 'EUR')
        {if ( amount < 3000)
          {return amount * 0.0075} else {return amount * 0}}}


          console.log(countCommision(900, 'UAH'));
          console.log(countCommision(20000, 'UAH'));

          console.log(countCommision(5200, 'USD'));
          console.log(countCommision(350, 'USD'));

          console.log(countCommision(20000, 'EUR'));
          console.log(countCommision(2000, 'EUR'));
