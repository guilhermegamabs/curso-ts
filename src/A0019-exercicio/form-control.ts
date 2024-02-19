import isEmail from 'validator/lib/isEmail';

const errorMessage = 'show-error-message';

const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const confirmPassword = document.getElementById(
  'password2',
) as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, confirmPassword);
  checkEmail(email);
  checkEqualPasswords(password, confirmPassword);
  if (shouldSendForm(this)) console.log('FORM ENVIADO');
});

function showErrorMessage(input: HTMLElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const error_Message = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  error_Message.innerText = msg;
  formFields.classList.add(errorMessage);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ser vazio!');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + errorMessage)
    .forEach((item) => item.classList.remove(errorMessage));
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido!');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem!');
    showErrorMessage(password2, 'Senhas não batem!');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + errorMessage).forEach(() => (send = false));
  return send;
}
