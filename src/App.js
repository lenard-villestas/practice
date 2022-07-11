import logo from './logo.svg';
import './App.css';
import PostList from './http_lesson/PostList';
import PostForm from './http_lesson/PostForm';
import PicTable from './lab5/PicTable';
import AddForm from './lab5/AddForm';

function App() {
  return (
    <div className="App">
      <AddForm/>
      
      {/**** Lab 5 - Post Get Delete
        <PicTable/>

        */}


      {
      /******** for lessons ***********
      <PostList/>
      <PostForm></PostForm>*/}

    </div>
  );
}

export default App;
