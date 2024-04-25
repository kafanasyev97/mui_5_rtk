const users = [
  {
    id: '1',
    username: 'Valera',
    email: 'asd@mail.re',
    birthdate: '12.12.2023',
    favorite_food_ids: ['1', '3'],
    photo_id: null,
  },
  {
    id: '2',
    username: 'Maksim',
    email: 'maks@mail.re',
    birthdate: '18.03.2013',
    favorite_food_ids: ['5'],
    photo_id: null,
  },
  {
    id: '3',
    username: 'Sasha',
    email: 'veron@mail.re',
    birthdate: '04.10.1998',
    favorite_food_ids: [''],
    photo_id: null,
  },
]

const foodListForSelectInput = [
  {
    id: '1',
    label: 'Морковка',
  },
  {
    id: '2',
    label: 'Свекла',
  },
  {
    id: '3',
    label: 'Капуста',
  },
  {
    id: '4',
    label: 'Редиска',
  },
  {
    id: '5',
    label: 'Баклажан',
  },
  {
    id: '6',
    label: 'Огурец',
  },
]

// const foodList = [
//   {
//     1: 'Морковка',
//   },
//   {
//     2: 'Свекла',
//   },
//   {
//     3: 'Капуста',
//   },
//   {
//     4: 'Редиска',
//   },
//   {
//     5: 'Баклажан',
//   },
//   {
//     6: 'Огурец',
//   },
// ]

const foodList = {
  1: 'Морковка',
  2: 'Свекла',
  3: 'Капуста',
  4: 'Редиска',
  5: 'Баклажан',
  6: 'Огурец',
}

export { users, foodListForSelectInput, foodList }
