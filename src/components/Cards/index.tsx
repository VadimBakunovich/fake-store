import { AnimatedContainer } from 'components/AnimatedContainer';
import { Card } from 'components/Card';
import { IProduct } from 'interfaces';
import Ul from './styled';

interface Props {
  data: IProduct[];
}

export const Cards = ({ data }: Props) => (
  <AnimatedContainer>
    <Ul>
      {data.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </Ul>
  </AnimatedContainer>
);
