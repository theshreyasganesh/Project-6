import React from 'react';
import {
  Typography, Card, CardContent, CardMedia
} from '@mui/material';
import  './userPhotos.css';
import FetchModel from '../../lib/fetchModelData';


/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPhotos : [],
    };

  }
  componentDidMount(){
    const userId = this.props.match.params.userId;
  
    // Use FetchModel to get user photos
    FetchModel(`/photosOfUser/${userId}`)
      .then((response) => {
        const userPhotos = response.data;
        this.setState({ userPhotos });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { userPhotos } = this.state;

    return (
      <div className="root">
        {userPhotos.map((photo, index) => (
          <Card key={index} className="card">
            <CardMedia
              className="media"
              image={`images/${photo.file_name}`}
              title={`Photo ${index + 1}`}
            />
            <CardContent>
              <Typography variant="caption">Photo {index + 1}</Typography>
              <Typography variant="body2">Date: {photo.date_time}</Typography>
              {photo.comments && photo.comments.length > 0 && (
                <div className="comment-list">
                  {photo.comments.map((comment, commentIndex) => (
                    <div key={commentIndex} className="comment">
                      <strong>{comment.user.first_name} {comment.user.last_name}:</strong> {comment.comment}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
    </div>


    );
  }
}

export default UserPhotos;
