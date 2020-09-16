import React from "react";
import {Grid} from "@material-ui/core";
import styles from "./header.module.css";
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


const Header = (props) => {
    return (
        <header className={styles.root}>
            <Grid container className={styles.container}>
                <Grid item xs={4}>
                    <StorageIcon className={styles.icon}></StorageIcon>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="column" justify="center" alignItems="center" className={styles.container}>
                        <Grid item> 
                            <div className={styles.title}>
                                title
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="row" justify="flex-end"  alignItems="center" spacing={1} className={styles.container}>
                        <Grid item>
                            <BuildIcon className={styles.icon}/>
                        </Grid>
                        <Grid item>
                            <GitHubIcon className={styles.icon}/>
                        </Grid>
                        <Grid item>
                            <EmailIcon className={styles.icon}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </header>
    );
};

export default Header;