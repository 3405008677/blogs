import request from '~/axios'
import FirstType from './first_type'
function header() {
  request.get('/user/router/list').then((result) => {
    console.log(result, 'result')
  })
  return (
    <>
      <FirstType />
    </>
  )
}

export default header
