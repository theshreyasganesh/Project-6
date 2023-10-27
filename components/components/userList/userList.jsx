import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import './userList.css';
import FetchModel from '../../lib/fetchModelData';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    // Use FetchModel to get the list of users
    FetchModel('/user/list')
      .then((response) => {
        const userList = response.data;
        this.setState({ userList });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleUserClick(userId) {
    // Navigate to the relative URL
    window.location.href = `/photo-share.html#/users/${userId}`;
    window.location.reload();
  }

  render() {
    const { userList } = this.state;
    return (
      <div className="user-list-container">
        <List component="nav">
          {userList.map((user, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={() => this.handleUserClick(user._id)}
                className="list-item"
              >
                <ListItemText primary={`${user.first_name} ${user.last_name}`} />
              </ListItem>
              {index < userList.length - 1 && <Divider className="divider" />}
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default UserList;

// import React from 'react';
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Avatar,
//   Box,
// } from '@mui/material';
// import './userList.css';
// import FetchModel from '../../lib/fetchModelData';

// class UserList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userList: [],
//     };
//   }

//   componentDidMount() {
//     // Use FetchModel to get the list of users
//     FetchModel('user/list')
//       .then((response) => {
//         const userList = response.data;
//         this.setState({ userList });
//         this.fetchUserCounts(userList); // Fetch user counts
//         console.log(userList)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   fetchUserCounts(userList) {
//     // Create an array of Promises to fetch counts for each user
//     const countPromises = userList.map((user) => {
//       return Promise.all([
//         FetchModel(`/user/${user._id}/photoCount`),
//         FetchModel(`/user/${user._id}/commentCount`),
//       ]);
//     });

//     // Resolve all the Promises and update the state with counts
//     Promise.all(countPromises)
//       .then((counts) => {
//         const updatedUserList = userList.map((user, index) => {
//           return {
//             ...user,
//             photoCount: counts[index][0].data.count,
//             commentCount: counts[index][1].data.count,
//           };
//         });

//         this.setState({ userList: updatedUserList });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   handleUserClick(userId) {
//     // Navigate to the relative URL
//     window.location.href = `/photo-share.html#/users/${userId}`;
//     window.location.reload();
//   }

//   render() {
//     const { userList } = this.state;
//     return (
//       <div className="user-list-container">
//         <List component="nav">
//           {userList.map((user, index) => (
//             <div key={index}>
//               <ListItem
//                 button
//                 onClick={() => this.handleUserClick(user._id)}
//                 className="list-item"
//               >
//                 <Avatar style={{ backgroundColor: 'green' }}>
//                   {user.photoCount}
//                 </Avatar>
//                 <Avatar style={{ backgroundColor: 'red' }}>
//                   {user.commentCount}
//                 </Avatar>
//                 <ListItemText
//                   primary={`${user.first_name} ${user.last_name}`}
//                 />
//               </ListItem>
//               {index < userList.length - 1 && <Divider className="divider" />}
//             </div>
//           ))}
//         </List>
//       </div>
//     );
//   }
// }

// export default UserList;

