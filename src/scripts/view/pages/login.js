const Login = {
    async render() {
      return `
        <div class="login-wrapper">
          <img src="./Mask-group.png" alt="Logo" class="login-logo"></img>
          <div class="login-container">
            <div class="login-form">
              <h2 class="log">Masuk</h2>
              <form id="login-form" action="/login" method="POST">
                <div class="form-group">
                  <input type="email" id="email" name="email" required placeholder="email">
                </div>
                <div class="form-group">
                  <input type="password" id="password" name="password" required placeholder="password">
                </div>
                <button type="submit" class="log">Masuk</button>
              </form>
              <div class="register-link">
                <p>Belum punya akun? <a href="#/register">DAFTAR DISINI</a></p>
              </div>
            </div>
          </div>
        </div>
      `;
    },
  
    async afterRender() {
      const loginForm = document.getElementById('login-form');
  
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Simulate login success
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '#/beranda'; 
      });
    }
  };
  
  export default Login;
  