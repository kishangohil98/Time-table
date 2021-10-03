import React, { useState, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [data, setData] = useState({
        firstFormData: {
            noOfDays: 5,
            noOfSubjectsPerDay: 2,
            noOfWorkingHours: 4,
            totalSubjects: 4,
        }
    });
    return (
        <>
          <DataContext.Provider value={[data, setData]}>
            {props.children}
          </DataContext.Provider>
        </>
    )
}

export default DataProvider;
