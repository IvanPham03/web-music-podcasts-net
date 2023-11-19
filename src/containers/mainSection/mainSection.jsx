import React, { Component } from "react";

import { connect, useDispatch, useSelector } from "react-redux";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import Browse from "../../components/sections/browse/browser";
import Songs from "../../components/sections/songList/songList";
import Playlist from "../../components/sections/playlist/playlist";
import Artist from "../../components/sections/artist/artist";
import Album from "../../components/sections/album/album";
import Search from "../../components/sections/search/search";
import Albums from "../../components/sections/top/albums";
import Artists from "../../components/sections/top/artists";
import Modal from "../../components/playlistModal/modal";
import defaultProfile from "./images/profile.png";
import "./mainSection.css";

const MainSection = () => {
  let img = defaultProfile;
  let name = "Trường đẹp trai khoai to";
  let id = "0001";
  const view  = useSelector(state => state.ui.view)
  return (
    <div className="main-section">
      <Header username={name || id} img={img} />
      <Modal />
      <div className="main-section-container">
        {view === "browse" ? <Browse /> : null}
        {/* {view === "playlist" ? <Playlist /> : null}
        {view === "recently" ? <Songs recently /> : null}
        {view === "songs" ? <Songs /> : null}
        {view === "artist" ? <Artist /> : null}
        {view === "album" ? <Album /> : null}
        {view === "search" ? <Search /> : null}
        {view === "albums" ? <Albums /> : null}
        {view === "artists" ? <Artists /> : null} */}
      </div>
      <Footer />
    </div>
  );
};
// class MainSection extends Component {
//   render = () => {
//     // let name = this.props.user.display_name;
//     // let id = this.props.user.id;

//     // let img = this.props.user.images[0]
//     //   ? this.props.user.images[0].url
//     //   : defaultProfile;

//     let img = defaultProfile;
//     let name= "Trường đẹp trai khoai to"
//     let id = "0001"
//     return (
//       <div className="main-section">
//         <Header username={name || id} img={img} />
//         <Modal />
//         <div className="main-section-container">
//           {this.props.view === 'browse' ? <Browse /> : null}
//           {this.props.view === 'playlist' ? <Playlist /> : null}
//           {this.props.view === 'recently' ? <Songs recently /> : null}
//           {this.props.view === 'songs' ? <Songs /> : null}
//           {this.props.view === 'artist' ? <Artist /> : null}
//           {this.props.view === 'album' ? <Album /> : null}
//           {this.props.view === 'search' ? <Search /> : null}
//           {this.props.view === 'albums' ? <Albums /> : null}
//           {this.props.view === 'artists' ? <Artists /> : null}
//         </div>
//         <Footer />
//       </div>
//     );
//   };
// }

// const mapStateToProps = state => {
//   return {
//     user: state.userReducer.user,
//     view: state.uiReducer.view
//   };
// };

// export default connect(mapStateToProps)(MainSection);
export default MainSection;
