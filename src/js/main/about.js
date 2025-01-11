// const signUp = async () => {
//     // Дані для запиту
//     const userSignUpData = {
//       email: 'xample@example.com',
//       password: 'yourpassword123',
//       phone: 123456789,    // опціонально
//       name: 'John Doe'        // опціонально
//     };
  
//     try {
//       // Виконання запиту
//       const response = await fetch('https://hoby-api.onrender.com/auth/signup', {
//         method: 'POST', // Метод запиту
//         headers: {
//           'Content-Type': 'application/json', // Формат даних
//         },
//         body: JSON.stringify(userSignUpData), // Перетворення об'єкта у JSON
//       });
  
//       // Перевірка статусу відповіді
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Помилка при реєстрації:', errorData);
//         return;
//       }
  
//       // Обробка відповіді
//       const responseData = await response.json();
//       console.log('Успішна реєстрація:', responseData);
//     } catch (error) {
//       // Обробка помилки мережі
//       console.error('Помилка мережі:', error);
//     }
//   };
  
//   // Виклик функції
//   signUp();