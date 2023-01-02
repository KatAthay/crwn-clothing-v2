import Card from '../card/card.component';
import './card-list.styles.css';


const CardList = ({ monsters }) => (
  <div className='card-list' >
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
//render and rerender part 2 explains rendering building blocks
