 import React, { Component } from 'react';
 import albumData from './../data/albums';

  class Album extends Component {
  	constructor(props) {
  		super(props);
<<<<<<< HEAD
=======
  	
>>>>>>> assignment-5-audio-playback

     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

  		this.state = {
<<<<<<< HEAD
  	  		album: album,
=======
  			album: album,
>>>>>>> assignment-5-audio-playback
      		currentSong: album.songs[0],
      		isPlaying: false
  		};

<<<<<<< HEAD
     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
  	}

  play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
=======
     	this.audioElement = document.createElement('audio');
     	this.audioElement.src = album.songs[0].audioSrc;
  	}

   play() {
     	this.audioElement.play();
     	this.setState({ isPlaying: true });
>>>>>>> assignment-5-audio-playback
   }

   pause() {
     this.audioElement.pause();
     this.setState({ isPlaying: false });
<<<<<<< HEAD
   }   
=======
   }
>>>>>>> assignment-5-audio-playback

   setSong(song) {
     this.audioElement.src = song.audioSrc;
     this.setState({ currentSong: song });
   }

   handleSongClick(song) {
     const isSameSong = this.state.currentSong === song;
     if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
       if (!isSameSong) { this.setSong(song); } 
       this.play();
     }
   }
<<<<<<< HEAD

     handleSongHover(song) {
    this.setState({ isHovered: song });
  }

  handleIcon(song, index) {
    if(this.state.currentSong === song && this.state.isPlaying) {
      return <span className="ion ion-pause"></span>
    } else if (this.state.isHovered === song && !this.state.isPlaying) {
      return <span className="ion ion-play"></span>
    } else {
      return index + 1 + '. ';
    }
  }

=======
 
>>>>>>> assignment-5-audio-playback
   render() {
     return (
       <section className="album">
         <section id="album-info">
		<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
           <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>  
           <tbody>
<<<<<<< HEAD
            {this.state.album.songs.map( (song, index) =>
   			<tr className="song" key={index} onClick={() => this.handleSongClick(song)}
                     >
                  <td className="song-actions" onMouseEnter={ () => this.handleSongHover(song)} onMouseLeave={ () => this.handleSongHover(null)}>
                {this.handleIcon(song, index)}>

                  </td>
                  <td className="song-title">{song.title}</td>
                  <td className="song-duration">{song.duration}</td>
                </tr>
              )
            }
=======
             	{this.state.album.songs.map( (song, index) => 
			 	<tr className="song" key={index} onClick={() => this.handleSongClick(song)} >
			 	</tr>
			    )}
>>>>>>> assignment-5-audio-playback
           </tbody>
         </table>
       </section>
     );
   }
 }

 export default Album;