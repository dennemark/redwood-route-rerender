// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import FirstLayout from 'src/layouts/FirstLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import SecondLayout from 'src/layouts/SecondLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FirstLayout}>
        {/* <Set wrap={SecondLayout}> */}
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/posts" page={PostPostsPage} name="posts" />
        </Set>
        {/* </Set> */}
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
