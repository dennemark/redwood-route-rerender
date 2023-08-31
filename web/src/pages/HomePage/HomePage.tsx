import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <h2>
        <Link to={routes.posts()}>Posts (Unmounting)</Link>
      </h2>

      {/* <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
        <Link to={routes.post({ id: 1 })}>First Post</Link>
      </p> */}
    </>
  )
}

export default HomePage
