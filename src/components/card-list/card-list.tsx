import Card from '../card/card'
import './card-list.css'
import { Monster } from '../../App';

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return < Card key={monster.id} monster={monster} />
        })}
    </div>
);

export default CardList