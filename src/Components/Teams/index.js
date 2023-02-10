/* eslint-disable react/no-array-index-key */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionShowCase from '../../store/modules/showcase/actions';
import listTeams from './ListTeams';
import { Container, Image, SubContainer } from './styled';

export default function Teams() {
  const list = Object.values(listTeams);
  const dispatch = useDispatch();
  return (
    <Container>
      {list.map((team, index) => (
        <SubContainer key={index} onClick={(e) => dispatch(actionShowCase.showOrderTeam(team.name))}>
          <Link to="/produtos">
            <Image src={team.image} alt="" />
          </Link>
        </SubContainer>
      ))}
    </Container>
  );
}
