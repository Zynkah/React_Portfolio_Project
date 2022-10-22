import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedMenu } from "../menu/menusSlice";
import { selectFeaturedBanquet } from "../banquets/banquetsSlice";
import { selectFeaturedMaids } from "../maids/maidsSlice";
import { selectCartItems } from '../cart/cartSlice';
import { useSelector } from "react-redux";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedMenu(state),
    selectFeaturedBanquet(state),
    selectFeaturedMaids(state),
    selectCartItems(state)
  ]);

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
