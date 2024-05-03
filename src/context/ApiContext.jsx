
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { BASE_URL } from "../api/Api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [whyus, setWhyUs] = useState([]);
    const [team, setTeam] = useState([]);
    const [statistic, setStatistic] = useState([]);
    const [services, setServices] = useState([]);
    const [blog, setBlog] = useState([]);
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${BASE_URL}/why_us`);
                setWhyUs(response1.data);

                const response2 = await axios.get(`${BASE_URL}/team`);
                setTeam(response2.data);

                const response3 = await axios.get(`${BASE_URL}/statistic`);
                setStatistic(response3.data)

                const response4 = await axios.get(`${BASE_URL}/services`);
                setServices(response4.data)

                const response5 = await axios.get(`${BASE_URL}/blogs`);
                setBlog(response5.data)

                const response6 = await axios.get(`${BASE_URL}/projects`);
                setProjects(response6.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    return (
        <ApiContext.Provider value={{ whyus, team, statistic, services, blog, projects }}>
            {children}
        </ApiContext.Provider>
    )
}

