import { useAuth } from '../hooks/useAuth';
import { getDatabase, onValue, push, ref } from 'firebase/database';
import { app  } from '../services/firebase';
import { useParams, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';




const Comments = () => {
  const {user} = useAuth()
  const params = useParams();
  let id = params.id

  const [comment, setComment] = useState('');
  const [listComments, setListComments] = useState([]);


  useEffect(() => {
    //Ref database
    const db = getDatabase(app);
    onValue(ref(db, `imgDetail/${id}`), (snapshot) => {
      const data = snapshot.val();
      const getComments = data.comments ?? {};

      //Change return object to normal array;
      const parsedComments = Object.entries(getComments).map(([key, value]) => {
        return {
          commentId: key,
          comment: value.comment,
          author: value.author,
        };
      });

      setListComments(parsedComments);
      
    });
  }, [id]);


  async function handleSendComment(e){
    e.preventDefault();
    const newComment = {
      author: { username: user.name, avatar: user.avatar, id: user.id},
      comment: comment,
      imageId: id
    }

    const db = getDatabase(app);
    await push(ref(db, `imgDetail/${id}/comments`), newComment);
    setComment('');
  }

  //wait the user info
  // if(!user){
  //   return <div>Loading</div>
  // }


  return(
    <>
    
      <div className="container">
        <h3 className="text-center mb-3 ">Comments</h3>
        {listComments.map((e, i) => (
          <div className='comment-list mb-3' key={i}>
          <div>
            <Link to={`/profile/${e.author.id}`}>
          <img
             src={e.author.avatar}
             alt={e.author.username}
             className="mr-3 rounded-circle comment-avatar"
          />
          </Link>
          </div>
          <div className='ml-3 d-flex flex-column'>
            <Link to={`/profile/${e.author.id}`}>
             {e.author.username}
            </Link>
            {e.comment}
          </div>
        </div>

        ))}
        {user && (
            <form onSubmit={handleSendComment}>
            <div className="form-group">
             <label htmlFor="comment">Comment</label>
              <textarea
                className="form-control comment-form"
                id="comment"
                rows="3"
                placeholder="Enter comment"
                onChange={(event) => setComment(event.target.value)}
                value={comment}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      
       </div>
    </>
  )
}


export default Comments