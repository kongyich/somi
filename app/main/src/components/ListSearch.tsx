import { FC, useState, ChangeEvent, useEffect } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input
const ListSearch: FC = () => {

  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState("")
  // 获取 url 参数，并设置到 input value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function handleSearch(val: string) {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${val}`,
    })
  }

  return (
    <Search
      placeholder='请输入关键字'
      size='large'
      allowClear
      value={value}
      style={{ width: "260px" }}
      onChange={handleChange}
      onSearch={handleSearch}
    />
  )
}

export default ListSearch
