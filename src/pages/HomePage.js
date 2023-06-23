import { useSelector } from 'react-redux'

const HomePage = () => {
  const { infos } = useSelector((store) => store.infos)
  console.log(infos);


  return (
    <div>
      {
        infos.map((d, i) => {
          // console.log(d.username);
          return (
            <div key={i}>
              <h1>Username: {d.username}</h1>
              <h1>Email: {d.email}</h1>
              <h1>gender: {d.gender}</h1>
              <h1>hobbies: {d.hobby}</h1>
              <h1>Country: {d.country}</h1>
              <h1>Message: {d.msg}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomePage
