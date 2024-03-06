import PropTypes from 'prop-types';
import './ItemCard.scss';
import UserInfo from 'components/UserInfo';
import { ZeroIcon } from 'assets/images/icons/fa';

const ItemCard = ({ className }) => {
  return (
    <div className={`itemCard ${className}`}>
      <UserInfo avatar={<ZeroIcon size="24" />} state={'온라인'} username={'이길호'} />
      <ItemCard.body />
    </div>
  );
};

ItemCard.body = () => {
  return (
    <div className="body">
      <section className="itemCard-section">나중에</section>
    </div>
  );
};

ItemCard.propTypes = {
  className: PropTypes.string,
};

export default ItemCard;
