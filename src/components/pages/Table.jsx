import { useState, useEffect } from "react";
import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { Select, Option } from "@material-tailwind/react";
import { SimpleFooter } from "../Footer";
import { SpinLoader } from "../Loading";

export function Table() {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const [tables, setTables] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5001/api/tables")
            .then((response) => response.json())
            .then((data) => {
                setTables(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching tables:", error);
                setLoading(false);
            });
    }, []);

    const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"];

    const handleYearChange = (value) => {
        if (value !== selectedYear) {
            setSelectedYear(value);
            setLoading(true);
        }
    };

    useEffect(() => {
        const selectedTable = tables.find((table) => table.year === selectedYear);
        if (selectedTable) {
            setImageSrc(selectedTable.src);
            setLoading(false);
        } else {
            setImageSrc("");
            setLoading(false);
        }
    }, [selectedYear, tables]);

    const toggleDropdown = () => {
        setOpen(!open);
    };

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
                                    {years.map((year) => (
                                        <Option className="mb-2" key={year} value={year}>
                                            {year}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        {loading ? (
                            <div className="mt-14 flex justify-center items-center">
                                <SpinLoader />
                            </div>
                        ) : (
                            imageSrc ? (
                                <div className="mt-14">
                                    <img
                                        src={imageSrc}
                                        alt={`Table for ${selectedYear}`}
                                        className="mx-auto max-w-6xl rounded-lg shadow-lg"
                                    />
                                </div>
                            ) : (
                                <p className="text-lg text-blue-gray-300 mt-6">No data available for this year.</p>
                            )
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
