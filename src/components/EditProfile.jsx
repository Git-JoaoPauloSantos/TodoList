import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function EditProfile() {
    const [userName, setUserName] = useState("Usuário")
    const [newUserName, setNewUserName] = useState()

    const [isExpanded, setIsExpanded] = useState(false)
    const handleAccordion = () => {
        setIsExpanded(!isExpanded)
    }

    const saveUserNameLocalStorage = (userNameToSave) => {
        localStorage.setItem("userName", userNameToSave)
    }

    const loadUserName = () => {
        const loadedUserName = localStorage.getItem("userName")
        return loadedUserName
    }

    const addUserName = (inputUserName) => {
        setUserName(inputUserName)
        saveUserNameLocalStorage(inputUserName)
        handleAccordion()

        console.log(isExpanded)
    }

    useState(() => {
        let loadedUserName = loadUserName()
        if (loadedUserName) {
            setUserName(loadedUserName)
            saveUserNameLocalStorage(loadedUserName)
        }


    }, [userName])

    useEffect(() => {
        const loadedUserName = loadUserName()
        if (loadedUserName) {
            setUserName(loadedUserName)
        }


    }, [])

    const validatesInput = () => {
        if (newUserName) {
            addUserName(newUserName)
        }
        setNewUserName("")
    }


    return (
        <div>
            <Accordion
                expanded={isExpanded}
                sx={{
                    backgroundColor: "transparent",
                    color: "#FFF",
                    boxShadow: "none",
                }}
            >
                <AccordionSummary
                    onClick={() => handleAccordion()}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        textAlign: "end"
                    }}
                    >
                        <Typography>{userName}</Typography>
                        <AccountCircle sx={{ width: "38px", height: "38px", marginLeft: "4px" }} />
                    </div>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div style={{ display: "flex", justifyContent: "space-around" }} >
                        <input
                            onChange={(e) => setNewUserName(e.target.value)}
                            placeholder={userName}
                            type="text"
                            style={{
                                height: "25px",
                                width: "60%",
                                marginRight: "3px",
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "1px solid #FFF",
                                outline: "none",
                                color: "#FFF",
                            }}
                        />
                        <IconButton
                            sx={{
                                maxWidth: "30px",
                                maxHeight: "30px"
                            }}
                            onClick={() => validatesInput()}
                            color='inherit' >
                            <DoneAllIcon />
                        </IconButton>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}