import React from 'react';
import axios from "axios";
// import axios

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    // axios 로부터 온 data를 잡아야 state에 사용할 수 있다.
    // axios.get 은 항상 빠르지 않기 때문에 JS 에 기다리라는 요청(async)을 함.
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies.data.data.movies);
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;