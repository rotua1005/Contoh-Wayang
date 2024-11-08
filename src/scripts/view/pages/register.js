const Register = {
  async render() {
    return `
      <div class="register-wrapper">
        <img src="./Mask-group.png" alt="Logo" class="register-logo"></img>
        <div class="register-container">
          <div class="register-form">
            <h2 class="log">Daftar</h2>
            <form id="register-form" action="/register" method="POST">
              <div class="form-group">
                <input type="text" id="name" name="name" required placeholder="name">
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" required placeholder="email">
              </div>
              <div class="form-group">
                <input type="password" id="password" name="password" required placeholder="password">
              </div>
              <button type="submit" class="log">Daftar</button>
            </form>
            <div class="login-link">
              <p>Sudah punya akun? <a href="#/login">MASUK DISINI</a></p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      // Simulate registration success
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '#/login'; 
    });
  }
};

export default Register;
