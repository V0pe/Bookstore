import AddBook from '../components/AddBook';
import DisplayBook from '../components/DisplayBook';

export default function BookPage() {
  return (
    <section className="bookpage">
      <DisplayBook />
      <AddBook />
    </section>
  );
}
