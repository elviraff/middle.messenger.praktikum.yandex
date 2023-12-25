import Handlebars from "handlebars";
import * as Components from './src/components'
import * as Pages from './src/pages'

const pages = {
  login: [Pages.LoginPage],
  signin: [Pages.SigninPage],
  error404: [Pages.Error404],
  error500: [Pages.Error500],
  chat: [Pages.Chat],
  profile: [Pages.Profile],
  profileChange: [Pages.ProfileChange],
  passwordChange: [Pages.PasswordChange],
  mainPage: [Pages.MainPage],
}

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component)
});

function navigate(page) {
  const [ source, context ] = pages[page];
  const container = document.getElementById('app');
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('mainPage'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});