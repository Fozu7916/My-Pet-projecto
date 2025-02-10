import React from 'react';
import './App.css';



interface MoneyHolderProps{
    money:number;
   }


const Profile: React.FC<MoneyHolderProps> = ({money}) => {
  return (
    <div className='MainWindow'>
      <h1>Добро пожаловать в профиль!</h1>
     <p>Ваше состояние: {money} $</p>
    </div>
  );
};

export default Profile;