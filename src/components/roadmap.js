import React, { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
const { Configuration, OpenAIApi } = require("openai");




export const Roadmap = () => {

    const [language, setLanguage] = useState("");
    const [time, setTime] = useState("");
    const [result, setResult] = useState("");

    const TestGPT = async () => {
        const response = await fetch(` http://localhost:4000/generate?language=${language}&time=${time}`, { method: "GET" })
        const data = await response.json();
        console.log(data);
        // console.log("lan", language)
        setResult(data.message)

    }

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const handlePeriodChange = (event) => {
        setTime(event.target.value);
    };

    function replaceWithBr() {
        return result.replace(/\n/g, "<br />")
      }



    return (
        <div align="center">
            <h1 class="text-center" >Get Your Developer Roadmap Here</h1>
            <div>
                Get me a Roadmap for learning
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Language/Framework</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={language}
                        onChange={handleChange}
                        label="Language/Framework"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"React"}>React</MenuItem>
                        <MenuItem value={"Javascript"}>Javascript</MenuItem>
                        <MenuItem value={"Rust"}>Rust</MenuItem>
                        <MenuItem value={"Redux"}>Redux</MenuItem>
                        <MenuItem value={"Python"}>Python</MenuItem>
                        <MenuItem value={"Vue"}>Vue</MenuItem>
                        <MenuItem value={"Angular"}>Angular</MenuItem>
                        <MenuItem value={"NodeJS"}>NodeJs</MenuItem>
                        <MenuItem value={"Flutter"}>Flutter</MenuItem>
                        <MenuItem value={"Java"}>Java</MenuItem>
                    </Select>
                </FormControl>
                In
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Period</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={time}
                        onChange={handlePeriodChange}
                        label="Period"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"2 Weeks"}>2 Weeks</MenuItem>
                        <MenuItem value={"1 month"}>1 Month</MenuItem>
                        <MenuItem value={"2 months"}>2 Months</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained"
                    onClick={TestGPT}
                >Generate</Button>
                <p dangerouslySetInnerHTML={{__html: replaceWithBr()}} />
                {/* <Typography variant="body1" color="textSecondary" align="center" width="900px" style={{lineHeight:'2.5em', wordWrap: "break-word"}} paragraph>{result}</Typography> */}
            </div>
        </div>
    )
}