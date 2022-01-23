let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // => empty

  let shop2 = function () {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket); // => play station
  };

  shop1();
  shop2();
  shop3();

  console.log(basket); // => computer
}

goShopping();