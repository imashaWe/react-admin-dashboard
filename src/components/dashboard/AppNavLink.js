import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ArticleIcon from '@mui/icons-material/Article';
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";


export default function AppNavLink() {
    const navigate = useNavigate();

    return (
        <React.Fragment>

            <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>


            <ListItemButton onClick={() => navigate("/blank")}>
                <ListItemIcon>
                    <ArticleIcon/>
                </ListItemIcon>
                <ListItemText primary="Blank"/>
            </ListItemButton>

            <Divider sx={{my: 1}}/>

            <ListItemButton onClick={() => navigate("/users")}>
                <ListItemIcon>
                    <GroupRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Users"/>
            </ListItemButton>

        </React.Fragment>
    );
}
