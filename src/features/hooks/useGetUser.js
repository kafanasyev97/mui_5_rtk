import { useGetFoodsListQuery, useGetUserQuery } from '../../app/redux'
import defaultPng from '../../shared/images/user-placeholder.png'

const useGetUser = (id) => {
  const foods = useGetFoodsListQuery()
  const { data = [], isLoading } = useGetUserQuery(id)
  if (isLoading) return null

  const foodsData = foods.data

  const foodsList = []

  for (const food in foodsData) {
    foodsList.push({ id: food, label: foodsData[food] })
  }

  const photoUrl = data.photo_id
    ? `https://tasks.tizh.ru/file/get?id=${data.photo_id}`
    : defaultPng

  const defValueFoods = foodsList.filter((el) =>
    data.favorite_food_ids.includes(el.id)
  )

  return { isLoading, data, photoUrl, foodsList, defValueFoods }
}

export { useGetUser }
