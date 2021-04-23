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
import {useHistory, NavLink} from  'react-router-dom';

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
    let history = useHistory();
    // const [submittedData, setSubmittedData] = useState([]);
   
    let [formData, setFormData] = useState({});
    const classes = useStyles();
    const [listData, setListdata] = useState([]);
    const [idx, setIdx] =useState(null);
    const [arr, setArr ] = useState([]);
 
     useEffect(() => {
         getDataLs();   
   }, [listData])


  
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

   var subtitle;
   

   const [modalIsOpen,setIsOpen] = useState(false);

   function openModal(items,index) {

    setFormData({...items})
       console.log(formData)
        setIsOpen(true)
        setIdx(index)
        arr.splice(0,1,items)
   }
 

   const updateValue = (id) =>{
    let data = JSON.parse(localStorage.getItem("newdata"))
    data.splice(idx,1,formData)
    localStorage.setItem("newdata",JSON.stringify(data))
    alert('Data updated successfully')
    setIsOpen(false)
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
                <button onClick={() => openModal(items,index)}>
                   <img style={{width:"20px", height:"20px"}} src={Edit} alt="edit" />
                   
                </button>
                <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         <h2 ref={_subtitle => (subtitle = _subtitle)}>Edit Details</h2>
        {arr.map((items,index) => {return (
          <div>
          <form >
            <input type="text" defaultValue={items.username} onChange={(e)=>setFormData({...formData, username:e.target.value})} ></input>
            <input type="text" defaultValue={items.age} onChange={(e)=>setFormData({...formData, age: e.target.value})}></input>
            <input type="text"  defaultValue={items.gender} onChange={(e)=>setFormData({...formData, gender: e.target.value})} ></input>
            <input type="text"  defaultValue={items.education} onChange={(e)=>setFormData({...formData, education: e.target.value})}></input>
            <input type="text"  defaultValue={items.profession} onChange={(e)=>setFormData({...formData, profession: e.target.value})}></input>
            <input type="text"  defaultValue={items.city} onChange={(e)=>setFormData({...formData, city: e.target.value})}></input>
            <button type="submit" onClick={() => updateValue()} >Update</button>
            <button onClick={closeModal}> <img style={{ width:"30px", height:"30px", border:"none", outlineStyle:"none"}} src={Cancel} alt="cancel" /></button>
          </form>
          
          </div>
        )})}
       
         
         
         
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
    <div>
     {/* <button><NavLink to={history.push("/")}>Back to home</NavLink></button> */}
    </div>
            </div>
        </div>
    )
}

export default List;
