import S from './styled';

const data = [
  ['UI Library', 'React', 'https://reactjs.org/'],
  ['Language', 'TypeScript', 'https://www.typescriptlang.org/'],
  ['Routing', 'React Router', 'https://reactrouter.com/'],
  ['Forms', 'React Hook Form', 'https://react-hook-form.com/'],
  ['Forms Validation', 'Zod', 'https://zod.dev/'],
  ['HTTP client', 'Axios', 'https://axios-http.com/'],
  [
    'Fetching, Caching and Updating data',
    'React Query',
    'https://react-query.tanstack.com/',
  ],
  ['State Management', 'Zustand', 'https://docs.pmnd.rs/zustand/'],
  ['Styling', 'Styled Components', 'https://styled-components.com/'],
  ['Animations', 'Framer Motion', 'https://www.framer.com/motion/'],
  [
    'Skeletons',
    'React Loading Skeleton',
    'https://github.com/dvtng/react-loading-skeleton#readme',
  ],
  ['Modal', 'React Modal', 'https://reactcommunity.org/react-modal/'],
  ['Icons', 'Font Awesome SVG Icons', 'https://fontawesome.com/icons'],
  ['Build Tool', 'Vite', 'https://vitejs.dev/'],
];

type Props = {
  title: string;
  value: string;
  src: string;
};

const Row = ({ title, value, src }: Props) => (
  <tr>
    <S.LeftCell>{title}</S.LeftCell>
    <td>
      <S.Link href={src} target='_blank' rel='noopener noreferer' title={src}>
        {value}
      </S.Link>
    </td>
  </tr>
);

export const About = () => (
  <S.Container>
    <S.Title>About this App</S.Title>
    <S.Table>
      <tbody>
        {data.map((i, idx) => (
          <Row key={idx} title={i[0]} value={i[1]} src={i[2]} />
        ))}
      </tbody>
    </S.Table>
    <span>
      Repository:{' '}
      <S.RepoLink
        href='https://github.com/VadimBakunovich/fake-store'
        rel='noopener noreferer'
        target='_blank'
      >
        github.com/VadimBakunovich/fake-store
      </S.RepoLink>
    </span>
  </S.Container>
);
