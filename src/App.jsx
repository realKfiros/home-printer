import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Axios from 'axios';

Axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

const App = () => {
  const [file, setFile] = useState();

  const printFile = async () => {
    let formData = new FormData();
    formData.append('print', file);
    Axios.post('/print', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setFile(undefined);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">realKfiros Printer</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container style={{ padding: 20 }}>
        <Card>
          <CardHeader title="Print" />
          <CardContent>{file && file.name}</CardContent>
          <CardActions>
            <input
              type="file"
              id="print-file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ width: 0 }}
            />
            <label htmlFor="print-file">
              <Button aria-label="upload picture" component="span">
                Open file
              </Button>
            </label>
            {file && <Button onClick={printFile}>Print</Button>}
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default App;
