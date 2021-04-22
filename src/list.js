import React,{useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from './assets/img/editpic.png';
import Delete from './assets/img/deletepic.png';
import Cancel from './assets/img/cancel.png';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
const List = () => {

    const classes = useStyles();
    const [listData, setListdata] = useState([]);
    
    const [updateTask, setupdateTask] = useState('');
     useEffect(() => {
         getDataLs();   
   }, [listData])

//    function randomNumberID(){
//     return Math.floor(Math.random()*(1000002 - 1 + 1)) + 1;
   
//   }
//   randomNumberID()
  
   const getDataLs = () => {
    let getData = JSON.parse(localStorage.getItem("newdata"));
    setListdata(getData);
   }

   const DeleteRow = (index) =>{
    alert("do you want delete?");
     let deleteRow = JSON.parse(localStorage.getItem("newdata"));
     deleteRow.splice(index,1);
     localStorage.setItem("newdata", JSON.stringify(deleteRow))
    
   }

//    const updateButton = (index) => {
//     let ids = listData.indexOf(index);
//     let task2 = JSON.parse(localStorage.getItem("newdata"));
//     task2[ids] = updateTask
//     localStorage.setItem("newdata",JSON.stringify(task2))
//    setListdata(JSON.parse(localStorage.getItem("newdata")));
//    }

   const updateValue = index => {
       const newValues = [...listData];
       newValues[index] = true;
       setListdata(newValues);
   }


   


   var subtitle;
   const [modalIsOpen,setIsOpen] = React.useState(false);
   function openModal() {
     setIsOpen(true);
   }
 
   function afterOpenModal() {
     // references are now sync'd and can be accessed.
     subtitle.style.color = '#f00';
   }
 
   function closeModal(){
     setIsOpen(false);
   }
    return (
        <div>
            <h1> User List</h1>

            <div>

            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Gender&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Eduction&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Profession&nbsp;</StyledTableCell>
            <StyledTableCell align="right">City&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Actions&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
            {
                listData.map((items,index) => {
                    return(
                        <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {items.username}
              </StyledTableCell>
              <StyledTableCell align="right">{items.age}</StyledTableCell>
              <StyledTableCell align="right">{items.gender}</StyledTableCell>
              <StyledTableCell align="right">{items.education}</StyledTableCell>
              <StyledTableCell align="right">{items.profession}</StyledTableCell>
              <StyledTableCell align="right">{items.city}</StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={openModal}>
                   <img style={{width:"20px", height:"20px"}} src={Edit} alt="edit" />
                   
                </button>
                <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        ><h2 ref={_subtitle => (subtitle = _subtitle)}>Edit Details</h2>
         
         
          <form >
            <input type="text" placeholder={items.username} onChange={(e) => setupdateTask(e.target.value)}></input>
            <input type="text" placeholder={items.age} onChange={(e) => setupdateTask(e.target.value)}></input>
            <input type="text" placeholder={items.gender} onChange={(e) => setupdateTask(e.target.value)}></input>
            <input type="text" placeholder={items.education} onChange={(e) => setupdateTask(e.target.value)}></input>
            <input type="text" placeholder={items.profession} onChange={(e) => setupdateTask(e.target.value)}></input>
            <input type="text" placeholder={items.city} onChange={(e) => setupdateTask(e.target.value)}></input>
            <button type="submit" onClick={() => updateValue(index)} >Update</button>
          </form>
          <button onClick={closeModal}> <img style={{ width:"30px", height:"30px", border:"none", outlineStyle:"none"}} src={Cancel} alt="cancel" /></button>
        </Modal>
                <button onClick={() =>DeleteRow(index)}>
                   <img style={{width:"20px", height:"20px"}} src={Delete} alt="edit" />
                </button>
                
                </StyledTableCell>
            </StyledTableRow>
                    )
                })
            }
        </TableBody>

       
        
      </Table>
    </TableContainer>
            </div>
        </div>
    )
}

export default List;
