import { BsArrowRightCircle } from 'react-icons/bs';

const Details = () => (
  <div className="dRegions">
    <span>CITY/TOWN BREAKDOWN - 2022 </span>
    <div className="region">
      <h3>{}</h3>
      <span>{}</span>
      <BsArrowRightCircle className="arrow" />
    </div>
  </div>
);

export default Details;
