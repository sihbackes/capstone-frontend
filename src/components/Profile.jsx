import Footer from "./FooterComponent"
import NavSearchBar from "./NavSearchBar"


const Profile = () => {
  return(
    <>
      <NavSearchBar/>
      <div class="container mt-5">
       <div class="row">
        <div class="col-md-6">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            tincidunt, quam vel congue vestibulum, mi enim mollis sapien,
            vel tempor erat ipsum id quam.
          </p>
        </div>
        <div class="col-md-6">
          <h3>Image Board</h3>
          <div class="row">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder Image 1"
                class="img-thumbnail"
              />
            </div>
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder Image 2"
                class="img-thumbnail"
              />
            </div>
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder Image 3"
                class="img-thumbnail"
              />
            </div>
          </div>
        </div>
       </div>
    </div>
      <Footer/>
    </>
  )
}

export default Profile