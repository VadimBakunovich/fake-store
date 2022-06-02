import Error from './styled';

type Props = {
  message: string | undefined;
};

export const ValidationError = ({ message }: Props) => (
  <Error isErr={!!message}>{message}</Error>
);
