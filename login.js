const listAccount = [{
    username: 'nguyendangthanhnam2013', password: 'thanhnam30072013'
  }];
  let isLogin = !!localStorage.getItem('token');
  function CheckLogin () {
    if (isLogin) {
      window.location.href = 'https://thewebsite2023.github.io/my-exam-en/';
    }
  }

  function Login () {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let checkLogin = listAccount.some(value => value.username === username && value.password === password);
    if (checkLogin) {
      localStorage.setItem('token', username);
      isLogin = true;
      CheckLogin();
    } else {
      result.innerHTML = "<h6>Thông tin đăng nhập không khớp với dữ liệu của chúng tôi.</h6>";
    }
  }
