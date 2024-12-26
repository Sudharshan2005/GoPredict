import React, { useState } from "react";
import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { Select, Option } from "@material-tailwind/react";
import { SimpleFooter } from "../Footer";

export function Table() {
    const [selectedYear, setSelectedYear] = useState("2023"); // Default year
    const [open, setOpen] = useState(false); // Manage dropdown state
    const tables = [
        { year: "2008", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2008.png" },
        { year: "2009", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2009.png" },
        { year: "2010", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2010.png" },
        { year: "2011", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2011.png" },
        { year: "2012", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2012.png" },
        { year: "2013", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2013.png" },
        { year: "2014", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2014.png" },
        { year: "2015", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2015.png" },
        { year: "2016", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2016.png" },
        { year: "2017", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2017.png" },
        { year: "2018", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2018.png" },
        { year: "2019", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2019.png" },
        { year: "2020", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2020.png" },
        { year: "2021", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2021.png" },
        { year: "2022", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2022.png" },
        { year: "2023", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2023.png" },
        { year: "2024", src: "https://gopredict.s3.us-east-1.amazonaws.com/Tables/2024.png" }
    ];

    const handleYearChange = (value) => {
        setSelectedYear(value);
        setOpen(false);
    };

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const selectedTable = tables.find((table) => table.year === selectedYear);

    return (
        <>
            <div className="h-[112vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
                <div className="p-5">
                    <NavigationbarWithDropdownMultilevelMenu />
                    <div className="text-center mt-14">
                        <h1 className="text-5xl text-blue-gray-300 font-bold uppercase">Points Table</h1>
                        <div className="text-center flex justify-center items-center">
                            <div className="mt-6">
                                <Select
                                    id="yearSelect"
                                    label="Select Year"
                                    value={selectedYear}
                                    open={open}
                                    onOpen={toggleDropdown}
                                    onClose={toggleDropdown}
                                    onChange={handleYearChange}
                                    className="rounded-lg bg-blue-gray-700 text-blue-gray-300 focus:outline-none"
                                >
                                    {tables.map((table) => (
                                        <Option key={table.year} value={table.year}>
                                            {table.year}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        {selectedTable && (
                            <div className="mt-14">
                                <img
                                    src={selectedTable.src}
                                    alt={`Table for ${selectedTable.year}`}
                                    className="mx-auto max-w-6xl rounded-lg shadow-lg"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <footer className="p-5">
                <SimpleFooter />
            </footer>
        </>
    );
}
