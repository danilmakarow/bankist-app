'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const curr = {
  eur: {
    name: 'Euro',
    abb: 'eur',
    sign: '€',
    excRate: 1,
  },
  usd: {
    name: 'Dollar',
    abb: 'usd',
    sign: '$',
    excRate: 1.08,
  },
  uah: {
    name: 'Hryvnia',
    abb: 'uah',
    sign: '₴',
    excRate: 39.75,
  },
};
const clients = {
  account1: {
    owner: 'Danil Makarov',
    username: 'dm',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    movementsDates: [
      '2022-04-18T21:31:17.178Z',
      '2022-04-23T07:42:02.383Z',
      '2022-06-28T09:15:04.904Z',
      '2022-09-08T14:11:59.604Z',
      '2022-12-01T10:17:24.185Z',
      '2023-01-05T17:01:17.194Z',
      '2023-01-11T23:36:17.929Z',
      '2023-01-26T10:51:36.790Z',
    ],
    interestRate: 1,
    pin: 1234,
    currency: curr.uah,
  },

  account2: {
    owner: 'Jonas Schmedtmann',
    username: 'js',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    interestRate: 1.2, // %
    pin: 1111,
    currency: curr.eur,
  },

  account3: {
    owner: 'Jessica Davis',
    username: 'jd',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    interestRate: 1.5,
    pin: 2222,
    currency: curr.eur,
  },

  account4: {
    owner: 'Steven Thomas Williams',
    username: 'stw',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    interestRate: 0.7,
    pin: 3333,
    currency: curr.usd,
  },

  account5: {
    owner: 'Sarah Smith',
    username: 'ss',
    movements: [430, 1000, 700, 50, 90],
    movementsDates: [
      '2021-11-18T21:31:17.178Z',
      '2021-12-23T07:42:02.383Z',
      '2022-01-28T09:15:04.904Z',
      '2022-04-01T10:17:24.185Z',
      '2022-05-08T14:11:59.604Z',
    ],
    interestRate: 1,
    pin: 4444,
    currency: curr.uah,
  },
};

const accounts = [
  clients.account1,
  clients.account2,
  clients.account3,
  clients.account4,
  clients.account5,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelLoginGlobal = document.querySelector('.header__login');
const logoIconNav = document.querySelector('.logo__nav');

const containerApp = document.querySelector('.app');
const containerNav = document.querySelector('.nav');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Login form
const containerLogin = document.querySelector('.login__window');
const formLogin = document.querySelector('.login__form--login');
const formSign = document.querySelector('.login__form--signup');

//Login global
const inputLogUserGlobal = document.querySelector('.login__input--global--usr');
const inputLogPinGlobal = document.querySelector('.login__input--global--pin');
const btnLoginGlobal = document.querySelector('.login__btn--global--login');
const loginFormChange = document.querySelector('.register__box--link');

//Signup global
const inputSignUserGlobal = document.querySelector(
  '.signup__input--global--usr'
);
const inputSignPinGlobal = document.querySelector(
  '.signup__input--global--pin'
);
const inputLangGlobal = document.querySelector('#select-currency');
const btnSignGlobal = document.querySelector('.login__btn--global--signup');
const usernamePreShow = document.querySelector('.login__username--place');
const LabelUsernamePreShow = document.querySelector('.login__username');

//Switch login box
const containerSwitchLink = document.querySelectorAll('.register__box--link');
const containerRegisterBox = document.querySelectorAll('.register__box');

//Errors display
const containerError = document.querySelector('.error__box');
const labelError = document.querySelector('.error__box--text');
const btnError = document.querySelector('.error__box--icon');

////// Modal Window //////
const boxModal = document.querySelector('.modal-window');
const boxOverlay = document.querySelector('.overlay');

const btnModalClose = document.querySelector('.modal-close');

const boxModalErr = document.querySelector('.modal-error');
const btnModalErr = document.querySelector('.modal-btn--err');
const labelModalErr = document.querySelector('.modal-message--err');

const boxModalConf = document.querySelector('.modal-confirm');
const labelModalConf = document.querySelector('.modal-message--confirm');
const btnModalAccept = document.querySelector('.modal-btn--accept');
const btnModalDecline = document.querySelector('.modal-btn--decline');

let activeUser;
let currentLoginForm = 0; //0-login , 1-signup

//////////IMPLEMENTING LOGIN AND SIGNUP/////////////

// Switch login signup box
const loginGlobalSwitch = function (e) {
  formLogin.classList.toggle('hidden--all');
  formSign.classList.toggle('hidden--all');

  containerRegisterBox.forEach(el => el.classList.toggle('hidden--all'));
  // console.log(currentLoginForm);

  if (currentLoginForm) {
    //for log in
    labelLoginGlobal.textContent = 'Sign in to Bankist';
    currentLoginForm--;
  } else {
    //for sign up
    labelLoginGlobal.textContent = 'Join Bankist';
    currentLoginForm++;
  }
  errorBoxRemove();
};
containerSwitchLink.forEach(el =>
  el.addEventListener('click', loginGlobalSwitch)
);

// Error box connecting
const errorBox = function (mes = 0) {
  if (typeof mes === 'string') {
    labelError.textContent = mes;
    containerError.classList.remove('hidden--all');
    // console.log('err without mes', mes);
  } else {
    // console.log('err with mes', mes);

    containerError.classList.add('hidden--all');
  }
};
btnError.addEventListener('click', errorBox);

// Login GLOBAL
btnLoginGlobal.addEventListener('click', function (e) {
  e.preventDefault();

  const account = accounts.find(
    acc => acc.username === inputLogUserGlobal.value
  );

  if (account && account.pin === +inputLogPinGlobal.value) {
    containerLogin.classList.add('hidden--all');
    containerNav.classList.remove('hidden');
    loginSucceed(account);
    cleanInputs(inputLogUserGlobal, inputLogPinGlobal);
  } else {
    if (!account) {
      errorBox(`There is no account with this Username!`);
      return;
    }
    if (!(account.pin === +inputLogPinGlobal.value)) {
      errorBox(`PIN is incorrect!`);
      return;
    }
  }
  cleanInputs(inputLoginPin, inputLoginUsername);
});

// Signup GLOBAL
btnSignGlobal.addEventListener('click', function (e) {
  e.preventDefault();

  const newPin = +inputSignPinGlobal.value;
  const newCurr = inputLangGlobal.value;
  const newName = inputSignUserGlobal.value;
  const newUserName = createUserNames(inputSignUserGlobal.value);

  // console.log(newName, newUserName, newPin, newCurr);
  if (
    newName &&
    !accounts.find(acc => acc.username === newUserName) &&
    `${newPin}`.length === 4 &&
    newCurr !== 'empty'
  ) {
    // add new acc to databases
    clients[`account${accounts.length + 1}`] = {
      owner: newName,
      username: newUserName,
      movements: [1000, 1000, -500],
      interestRate: 1.2,
      pin: newPin,
      currency: curr[`${newCurr}`],
    };
    accounts.push(clients[`account${accounts.length + 1}`]);

    //update interface
    containerLogin.classList.add('hidden--all');
    containerNav.classList.remove('hidden');

    //calculate UI
    loginSucceed(accounts.slice(-1)[0]);
    cleanInputs(inputSignPinGlobal, inputLangGlobal, inputSignUserGlobal);
  } else {
    if (!newName) {
      errorBox(`You must enter your Full name!`);
      return;
    }
    if (accounts.find(acc => acc.username === newUserName)) {
      errorBox(`There is already an account with this Username!`);
      return;
    }
    if (`${newPin}`.length !== 4) {
      errorBox(`The PIN length must be 4 digits!`);
      return;
    }
    if (newCurr === 'empty') {
      errorBox(`You have to choose currency!`);
      return;
    }
  }
});

//Showing username while registration
let timeout;
inputSignUserGlobal.addEventListener('input', function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    // code to be executed after 1 second
    usernamePreShow.textContent = createUserNames(inputSignUserGlobal.value);
  }, 1000);
  LabelUsernamePreShow.classList.remove('hidden');
});

// Login from app
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Остановит автоматичесскую презегрузку. Она - дефолтное поведение при нажатии кнопки в форме в html

  const account = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (account && account.pin === +inputLoginPin.value) {
    loginSucceed(account);
  } else console.log('Login Error⛔');
  cleanInputs(inputLoginPin, inputLoginUsername);
});

// Logout from app
logoIconNav.addEventListener('click', logout);

//////////IMPLEMENTING FUNCTIONALITY/////////////

//Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferTo = accounts?.find(
    acc => acc.username === inputTransferTo.value
  );
  const transfer = +inputTransferAmount.value;
  const transferExc = +(
    (transfer / activeUser.currency.excRate) *
    transferTo?.currency.excRate
  ).toFixed(2);

  if (transferTo && transfer > 0 && transfer <= activeUser.balance) {
    const confOp = function () {
      activeUser.movements.push(-transfer);
      transferTo.movements.push(transferExc);
      activeUser.movementsDates.push(new Date().toISOString());
      transferTo.movementsDates.push(new Date().toISOString());

      displayMovenments(activeUser);
      calcPrintBalances(activeUser);
      cleanInputs(inputTransferAmount, inputTransferTo);
      highlightLastMove(300);

      modalWinClose('close');
    };
    const message = `You are going to transfer ${
      transfer + activeUser.currency.sign
    } to ${transferTo.owner}. \n Receiver will get ${
      transferExc + transferTo.currency.sign
    }`;

    modalWin('conf', message, confOp);
    modalWinClose(confOp);

    btnModalAccept.addEventListener('click', confOp);
  } else {
    if (!inputTransferTo.value) {
      modalWin('err', 'You must enter your Reciever Username');
      return;
    }
    if (!transferTo) {
      modalWin('err', `Account ${inputTransferTo.value} not found`);
      return;
    }
    if (!inputTransferAmount.value) {
      modalWin('err', 'You must enter amount for the transaction');
      return;
    }
    if (transfer < 0) {
      modalWin('err', 'You can not transfer negative value');
      return;
    }
    if (!(transfer <= activeUser.balance)) {
      modalWin(
        'err',
        `Not enough money on balance. To continue transfer deposit ${
          transfer - activeUser.balance + activeUser.currency.sign
        }`
      );
      return;
    }
  }
});

// Requesting loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  // At least 1 deposit with more than 10% of requested loan amount.

  const requestedLoan = +inputLoanAmount.value;

  if (
    activeUser.movements.some(el => el > requestedLoan * 0.1) &&
    requestedLoan > 0
  ) {
    const confOp = function () {
      activeUser.movements.push(requestedLoan);
      activeUser.movementsDates.push(new Date().toISOString());
      displayMovenments(activeUser);
      calcPrintBalances(activeUser);
      cleanInputs(inputLoanAmount);
      highlightLastMove(300);

      btnModalAccept.removeEventListener('click', confOp);
      modalWinClose('close');
    };

    const message = `${
      activeUser.owner.split(' ')[0]
    }, you are going to apply for a loan at ${
      requestedLoan + activeUser.currency.sign
    }
    `;

    modalWin('conf', message, confOp);
    btnModalAccept.addEventListener('click', confOp);
  } else {
    if (!requestedLoan) {
      modalWin('err', 'You must enter Loan amount');
      return;
    }
    if (requestedLoan < 0) {
      modalWin('err', 'You cannot request negative Loan');
      return;
    }
    if (!activeUser.movements.some(el => el > requestedLoan * 0.1)) {
      modalWin(
        'err',
        `To apply for Loan you must have a deposit not less 10% of requested Loan amount. In your case you have to deposit at least ${
          requestedLoan * 0.1
        }`
      );
      return;
    }
  }
});

//Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    activeUser.username === inputCloseUsername.value &&
    activeUser.pin === +inputClosePin.value
  ) {
    const confOp = function () {
      accounts.splice(
        accounts.findIndex(acc => acc === activeUser),
        1
      );
      logout();
      cleanInputs(inputCloseUsername, inputClosePin);

      modalWinClose('close');
    };

    const message = `${
      activeUser.owner.split(' ')[0]
    }, you are going to delete your account. There will be no way to restore it later.
    `;

    modalWin('conf', message, confOp);
    btnModalAccept.addEventListener('click', confOp);
  } else {
    if (!inputCloseUsername.value) {
      modalWin('err', 'You must enter Username');
      return;
    }
    if (!inputClosePin.value) {
      modalWin('err', 'You must enter your PIN');
      return;
    }
    if (activeUser.username !== inputCloseUsername.value) {
      modalWin('err', 'Incorrect Username');
      return;
    }
    if (activeUser.pin !== +inputClosePin.value) {
      modalWin('err', 'PIN is incorrect');
      return;
    }
  }
});

//Sorting movements
let sort = true;
btnSort.addEventListener('click', function () {
  displayMovenments(activeUser, sort);
  sort = !sort;
});

//////////MODAL WINDOW/////////////

function modalWin(type, mes, confOp) {
  // type: err, conf
  boxOverlay.classList.remove('hidden--all');
  boxModal.classList.remove('hidden--all');
  modalWinClose(type, confOp);
  if (type === 'conf') {
    boxModalConf.classList.remove('hidden--all');
    labelModalConf.textContent = mes;
  } else if (type === 'err') {
    boxModalErr.classList.remove('hidden--all');
    labelModalErr.textContent = mes;
  }
}

const modalWinHiding = function () {
  boxOverlay.classList.add('hidden--all');
  boxModal.classList.add('hidden--all');
  boxModalConf.classList.add('hidden--all');
  boxModalErr.classList.add('hidden--all');
};

function modalWinClose(type, confOp) {
  if (type === 'close') {
    modalWinHiding();
    return;
  }

  const modalClose = function () {
    modalWinHiding();
    if (type === 'conf') btnModalAccept.removeEventListener('click', confOp);
  };

  [boxOverlay, btnModalClose, btnModalErr, btnModalDecline].forEach(el =>
    el.addEventListener('click', modalClose)
  );
}

//////////GENERAL REUSABLE FUNCTIONS/////////////

// LOGIN GENERAL
const loginSucceed = function (acc) {
  console.log('Login successful');
  activeUser = acc;

  containerApp.classList.remove('hidden');
  LabelUsernamePreShow.classList.add('hidden');

  errorBoxRemove();
  displayMovenments(activeUser);
  calcPrintBalances(activeUser);
  highlightLastMove(1000);
  dateGeneral();

  labelWelcome.textContent = `Good Day, ${activeUser.owner.split(' ')[0]}!`;
};

//logout general
function logout() {
  activeUser = '';
  labelWelcome.textContent = `Log in to get started`;

  containerNav.classList.add('hidden');
  containerApp.classList.add('hidden');
  containerLogin.classList.remove('hidden--all');
}

const errorBoxRemove = () =>
  containerError.classList.contains('hidden-all') ? 0 : errorBox();

const cleanInputs = (...inputs) => inputs.forEach(el => (el.value = ''));

const highlightLastMove = function (time) {
  const lastRow = document.querySelector('.movements__row');
  setTimeout(() => {
    lastRow.classList.add('highlight');
  }, time);

  setTimeout(() => {
    lastRow.classList.remove('highlight');
  }, time + 300);
};

//  Calculating days for UI movements
const calcdates = date => {
  date = new Date(date);
  const now = new Date();
  const daysPassed = Math.round(Math.abs(now - date) / (1000 * 60 * 60 * 24));

  if (daysPassed === 0) return 'today';
  else if (daysPassed === 1) return 'yesterday';
  else if (daysPassed > 1 && daysPassed < 6) return `${daysPassed} days ago`;

  const [month, day, year] = [
    `${date.getMonth() + 1}`.padStart(2, 0),
    `${date.getDate()}`.padStart(2, 0),
    date.getFullYear(),
  ];
  return `${month}/${day}/${year}`;
};

// Updating UI movements
const displayMovenments = function (acc, sort) {
  containerMovements.innerHTML = '';
  const toDisplay = [...acc.movements].map((el, i) => [
    el,
    acc.movementsDates[i],
  ]);
  if (sort) toDisplay.sort((a, b) => a[0] - b[0]);
  toDisplay.forEach(function (mov) {
    const type = mov[0] > 0 ? 'deposit' : 'withdrawal';
    const date = calcdates(mov[1]);
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}"> ${type.toUpperCase()}</div>
      <div class="movements__date">${date}</div>
      <div class="movements__value">${mov[0].toFixed(2).replace('.', ',')} ${
      activeUser.currency.sign
    }</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalances = function (activeUser) {
  const mov = activeUser.movements;
  const intRate = activeUser.interestRate;

  const sum = mov.reduce((acc, el) => acc + el, 0).toFixed(2);
  const income = Math.floor(
    mov.filter(el => el > 0).reduce((acc, el) => acc + el, 0)
  );
  const outcome = Math.floor(
    Math.abs(mov.filter(el => el < 0).reduce((acc, el) => acc + el, 0))
  );
  const interest = mov // виплата відсотків, 1.2% с депозиту
    .filter(el => el > 0 && el * (intRate / 100) >= 1)
    .map(el => el * (intRate / 100))
    .reduce((acc, el) => acc + el)
    .toFixed(2);

  activeUser.balance = sum;
  labelBalance.textContent = `${sum} ${activeUser.currency.sign}`;
  labelSumIn.textContent = `${income} ${activeUser.currency.sign}`;
  labelSumOut.textContent = `${outcome} ${activeUser.currency.sign}`;
  labelSumInterest.textContent = `${interest} ${activeUser.currency.sign}`;
};

// Для создания юсернейма новым юзерам
const createUserNames = function (name) {
  name = name
    .trim()
    .split(' ')
    .map(name => name[0])
    .join('')
    .toLowerCase();
  return name;
};

// Setting up date
function dateGeneral() {
  const dateDisplay = new Date();
  const [month, day, year, hours, minutes] = [
    `${dateDisplay.getMonth() + 1}`.padStart(2, 0),
    `${dateDisplay.getDate()}`.padStart(2, 0),
    dateDisplay.getFullYear(),
    `${dateDisplay.getHours()}`.padStart(2, 0),
    `${dateDisplay.getMinutes()}`.padStart(2, 0),
  ];
  document.querySelector(
    '.date'
  ).textContent = `${month}/${day}/${year}, ${hours}:${minutes}`;
}
