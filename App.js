const inputValue = document.querySelector("#NumInput");
const resText = document.querySelector("#resText");

inputValue.addEventListener("change", myInput);

//istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function myInput(...item) {
  item.map((res) => {
    let sayac = 0;

    for (let i = 2; i < Number(res); i++) {
      if (Number(res) % i == 0) {
        sayac++;
      }
    }

    if (sayac == 0) {
      console.log(res + ": asaldır");
    } else {
      console.log(res + ":asal değildir");
    }
  });
}

myInput(10, 20, 30, 7, 13, 17, 50, 19, 100);

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function friendNumbers(a, b) {
  let itemA = [];

  for (let i = 1; i < Number(a); i++) {
    if (Number(a) % i == 0) {
      itemA.push(i);
    }
  }

  let itemB = [];
  for (let i = 1; i < Number(b); i++) {
    if (Number(b) % i == 0) {
      itemB.push(i);
    }
  }

  if (
    itemA.reduce((acc, res) => acc + res) == b &&
    itemB.reduce((acc, res) => acc + res) == a
  ) {
    console.log(Number(a) + " ve " + Number(b) + " Arkadaş Sayıdır ");
  } else {
    console.log("Arkadaş Değiller");
  }
}

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
friendNumbers(220, 284);

function perferctNumbers() {
  let Numbers = [];
  for (let i = 1; i < 1000; i++) {
    Numbers.push(i);
  }

  Numbers.map((res) => {
    let item = [];

    for (let i = 1; i <= res; i++) {
      if (res % i == 0) {
        item.push(i);
      }
    }

    if (item.reduce((acc, res) => acc + res) == res * 2) {
      console.log(res);
    }
  });
}

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
perferctNumbers();

function AlPrimeNumbers() {
  let newNumbers = [];

  for (let i = 2; i < 1000; i++) {
    newNumbers.push(i);
  }

  newNumbers.map((res) => {
    let sayac = [];

    for (let i = 2; i < Number(res); i++) {
      if (Number(res) % i == 0) {
        sayac.push(i);
      }
    }
    if (sayac.length == 0) {
      console.log(Number(res));
    }
    sayac = [];
  });
}

AlPrimeNumbers();
