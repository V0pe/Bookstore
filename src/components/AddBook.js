export default function AddBook() {
  return (
    <form>
      <input
        type="text"
        placeholder="Book Title"
        name="title"
      />
      <input
        type="text"
        placeholder="Book Author"
        name="author"
      />
      <button type="button">Add Book</button>
    </form>
  );
}
