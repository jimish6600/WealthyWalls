import SearchBar from "../../components/searchBar/searchBar"
import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h6 className="title" >Invest in a property for rental income or Find your dream place</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit similique ipsa architecto inventore atque eum reprehenderit, beatae iure consequuntur sit est, ea tenetur nobis velit, sint error perferendis deleniti.</p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage