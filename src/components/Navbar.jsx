import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar'; // "@material-ui/core/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { LOGIN_ROUTE } from '../utils/consts';
import Context from '../utils/context';

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container justify="flex-end">
          {user ? (
            <Button onClick={() => auth.signOut()} variant="outlined">
              Выйти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button
                style={{ color: 'white', border: '1px solid white' }}
                // variant="outlined"
              >
                Логин
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
//     <Grid container justify={"flex-end"}>
//       user ? (
//    <Button onClick={() => auth.signOut()} variant={"outlined"}>
//   Выйти
// </Button>;
// ) : (
//   <NavLink to={LOGIN_ROUTE}>
//    <Button variant={"outlined"}>Логин</Button>
//  </NavLink>
//       )}
//      </Grid>
export default Navbar;
