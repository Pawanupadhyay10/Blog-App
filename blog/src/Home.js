import {useState} from "react"
const Home = () => {
    const [blogs,setblog]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    return ( <div className="home" >
      {
          blogs.map((blog)=>(
              <div className="blog-preview" key={blogs.id}>
                  <h1>{blog.title}</h1>
                  <p>Written by {blog.author}</p>
              </div>
          ))
      }
    </div> );
}
 
export default Home;