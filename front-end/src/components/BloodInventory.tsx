import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Box,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  GET_ALL_BLOOD,
  CREATE_BLOOD,
  DELETE_BLOOD,
  USE_BLOOD,
} from '../graphql/queries';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function BloodInventory() {
  const [open, setOpen] = useState(false);
  const [newBlood, setNewBlood] = useState({
    name: '',
    quantity: '',
    bloodType: '',
  });

  const { loading, error, data } = useQuery(GET_ALL_BLOOD);
  const [createBlood] = useMutation(CREATE_BLOOD, {
    refetchQueries: [{ query: GET_ALL_BLOOD }],
  });
  const [deleteBlood] = useMutation(DELETE_BLOOD, {
    refetchQueries: [{ query: GET_ALL_BLOOD }],
  });
  const [useBlood] = useMutation(USE_BLOOD, {
    refetchQueries: [{ query: GET_ALL_BLOOD }],
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      await createBlood({
        variables: {
          name: newBlood.name,
          quantity: parseFloat(newBlood.quantity),
          bloodType: newBlood.bloodType,
        },
      });
      handleClose();
      setNewBlood({ name: '', quantity: '', bloodType: '' });
    } catch (err) {
      console.error('Error creating blood entry:', err);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Blood Inventory Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ mb: 2 }}
      >
        Add New Entry
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.getAll.map((blood: any) => (
              <TableRow key={blood.id}>
                <TableCell>{blood.name}</TableCell>
                <TableCell>{blood.bloodType}</TableCell>
                <TableCell>{blood.quantity}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => useBlood({ variables: { id: blood.id } })}
                    color="primary"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteBlood({ variables: { id: blood.id } })}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Blood Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newBlood.name}
            onChange={(e) => setNewBlood({ ...newBlood, name: e.target.value })}
          />
          <TextField
            select
            margin="dense"
            label="Blood Type"
            fullWidth
            value={newBlood.bloodType}
            onChange={(e) =>
              setNewBlood({ ...newBlood, bloodType: e.target.value })
            }
          >
            {bloodTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Quantity"
            type="number"
            fullWidth
            value={newBlood.quantity}
            onChange={(e) =>
              setNewBlood({ ...newBlood, quantity: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
