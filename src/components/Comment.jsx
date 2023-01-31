import { useAuth } from '../hooks/useAuth';

const Comments = () => {
  const {user} = useAuth()

  return(
    <>
      <div class="container">
        <h3 class="text-center mb-3">Comments</h3>
        <div className='comment-list'>
          <div>
          <img
             src="https://via.placeholder.com/64"
             alt="User Avatar"
             class="mr-3 rounded-circle comment-avatar"
          />
          </div>
          <div>
            comment
          </div>
        </div>
        <div className='comment-list'>
          <div>
          <img
             src="https://via.placeholder.com/64"
             alt="User Avatar"
             class="mr-3 rounded-circle comment-avatar"
          />
          </div>
          <div>
            comment
          </div>
        </div>
        <div class="media mb-3">
         <img
          src={user.avatar}
          alt="User Avatar"
          class="mr-3 rounded-circle comment-avatar"/>
         <div class="media-body">
           <h5 class="mt-0">{user.name}</h5>
         </div>
        </div>
        <form>
          <div class="form-group">
           <label for="comment">Comment</label>
            <textarea
              class="form-control comment-form"
              id="comment"
              rows="3"
              placeholder="Enter comment"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       </div>
    </>
  )
}


export default Comments