let h1Tag = $('#main');
// I need when click on the hide/show (hide show )the password
$('#show-hide').click(function() {
  console.log('show/hide password');
  // show or hide the password
  const passwordInput = $('#password');
  // console.log(passwordInput.attr('type') === 'password');
  // check the password dif hidden
  if (passwordInput.attr('type') === 'password') {
    // show it (type from paswword => text)
    passwordInput.attr('type', 'text');
    // otherwise
  } else {
    // hide it (type from text => paswword)
    passwordInput.attr('type', 'password');
  }
});



const user = { email: 'm@yahoo.com', password: '123' };
const login = function() {
  // take the password and input
  const emailValue = $('#email').val();
  const passwordValue = $('#password').val();
  // if the user email correct and password correct

  console.log(emailValue, password)
  if(emailValue === user.email && passwordValue === user.password){
  console.log('welcome')
  // otherwise
  }else{
  console.log('user not exist')
  }
};

// when click on the loginButton excute the login fucntion
$('#loginButton').click(login);







/* 
Extra funcrtion login
const loginUser = {
    email: emailInput.val(),
    password: passwordInput.val()
  };
  console.log(loginUser); 
// extra
const users = [
  { email: 'm@yahoo.com', password: '123' },
  { email: 'jouza@gmail.com', password: '235' },
  { email: 'student@gmail.com', password: '456' },
  { email: 'admin@yahoo.com', password: 'admin' }
];
  // if the user email wrong  && password correct
  // tell him/her => wrond email
  // if the user email correct && password wrong
  // tell him/her => wrond password
*/