// 首页
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
function home() {
  const location = useLocation()

  console.log(location, 'location')

  return (
    <>
      <div>首页</div>
    </>
  )
}

export default home
