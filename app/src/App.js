import React, { useEffect, useState } from 'react';
import JobBoard from './components/jobboard';
import {ThemeProvider} from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./components/Theme";
import { makeStyles } from '@material-ui/core/styles';

export default function App(){
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);
  // const[filters,setFilters] = useState([]);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(()=>{
    fetch ('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
    .then((res)=> res.json())
    .then((data)=>{
      setJobs(data);
    });
  },[]);

  console.log(jobs)
  // const filter = ({location, type, title }) =>{}
  // const filteredJobs = jobs.filter(filter);

  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <div className={classes.headerContainer}>
            <button onClick={themeToggler}>Switch Theme</button>
          
            <header className={classes.header}>
              <h1>Github Jobs Board</h1>
            </header>
          </div>
                {
                  jobs.length === 0 
                    ? (<p>Jobs are loading....</p>)
                    : (jobs.map((job) => <JobBoard job = {job} key = {job.id} />))
                };
        </div>
      </>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign:"center",
    fontFamily: "consolas",
    fontWeight: "400"
  },
  headerContainer:{
    background: '#5865E0'
    
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

//1.Study the design & json
//2. JOb Borad 
//3. Get the data from the JSON 
//4. Pass the data
//5. Style
//6. Filter
