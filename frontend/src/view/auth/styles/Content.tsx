import { styled } from '@material-ui/core/styles';

const Content = styled('div')(({ theme }) => ({
  width: '500px',
  height: '100%',
  minHeight: '100%',
  overflowY: 'auto',
  zIndex: 1,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '56px 40px',
  backgroundColor: '#fff',
  borderLeft: '4px solid #eee',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    borderLeft: 0,
  },
}));

export default Content;
