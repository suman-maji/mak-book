import { useEffect, useState } from 'react'

const url=`https://api.github.com/users/`;
const useGithub = (userId) => {
    const [githubProfile,setGithubProfile]=useState("");

    async function fetchData(userId){
        try{
            const data=await fetch(url+userId);
            const jsonData=await data.json();
            setGithubProfile(jsonData);
        }catch(error){
            console.log("Error occured in fetching the user's details");
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData(userId);
    },[])
  return {githubProfile};
}

export default useGithub