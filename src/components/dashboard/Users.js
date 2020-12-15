import React,{useState,useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from "axios";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8080/");
      console.log(response.data.result);
      setData(response.data.result);
    };
    getUsers();
  }, []);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>all users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>picture</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>Card Number</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data?<>
            {data.map((data) => (
            <TableRow key={data._id}>
            <TableCell><img src={data.img} style={{width:"50px",height:"50px"}} /></TableCell>
            <TableCell>{data.firstname+" "+ data.lastname}</TableCell>
            <TableCell>{data.phone}</TableCell>
            <TableCell>{data.cardnumber}</TableCell>
          </TableRow>
          ))}</>:null}
          
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}