import React, {useEffect, useState} from "react";
import AddCard from './WorkshopAddCard';
import ItemCard from './WorkshopItemCard'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../../../public/Styles/itemSection.css";
import ItemForm from './ItemForm';
import axios from "axios";


function ItemSection(){

    const[workshop, setWorkshop] = useState([]);

    function addWorkshop(newWorkshop){
        axios.post('http://localhost:3000/workshops/add',newWorkshop);
        /*setWorkshop(prevWorkshops =>{
            return [...prevWorkshops, newWorkshop]
        });*/
    }

    useEffect(() => {
        retrieveWorkshops();
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function retrieveWorkshops(){
        axios.get("http://localhost:3000/workshops/").then(res=>{
                setWorkshop(res.data)
        })
    }

    return(
        <div className="container">
            <div className="row">


            <div style={{display: "grid", gridTemplateColumns: "450px 450px 450px"}}>

                {workshop.map((workshopCard, index)=>{

                    return(
                        <div className="col-lg-4 col-sm-12" style={{cursor: "pointer"}} onClick={handleClickOpen}>
                            <ItemCard
                                key={index}
                                id={index}
                                topic={workshopCard.topic}
                                description={workshopCard.description}
                            />
                        </div>
                    )
            })}
            </div>

                <div className="col-lg-4" onClick={handleClickOpen} style={{cursor: "pointer"}}>
                    <AddCard />
                </div>

            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>
                    <div className="dialog-title">
                        Lets Schedule a new workshop.
                        <hr className="workshopStyle"/>
                    </div>
                </DialogTitle>

                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    /> */}
                    <ItemForm
                    addWorkshops={addWorkshop}
                />
                </DialogContent>
                <DialogActions>
                    {/*  <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button> */}
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default ItemSection;