import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username === 'Fozy' && password === '1234') {
      alert('Вход выполнен успешно!'); 
    } else {
      alert('Неверный логин или пароль.'); 
    }
  };

  return (
    <>
      <div className="MainWindow">
        <h1>Приложение для учёта доходов и расходов</h1>
        <p>Для продолжения войдите в свой аккаунт</p>
        <p>Введите логин</p>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <p>Введите пароль</p>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button onClick={handleLoginClick}>Войти</button>
        <br />
      </div>
    </>
  );
}

export default App;