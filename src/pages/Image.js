const Image = () => {
    return (
    
      <h1>
          <form action="/upload" method="POST" encType="multipart/form-data">
          <input type="file" name="image"></input>
          <button type="submit">upload</button>
        </form>
      </h1>
    );
}
 
export default Image;