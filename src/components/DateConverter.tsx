import { parse, format, isValid } from "date-fns";
import { useState } from "react";

export default function DateConverter() {
  const [inputDate, setInputDate] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
  const [error, setError] = useState("");

  const handleConvertClick = () => {
    const parsedDate = parse(inputDate, "dd/MM/yyyy", new Date());
    if (isValid(parsedDate)) {
      const convertedDateString = format(parsedDate, "yyyy-MM-dd");
      setConvertedDate(convertedDateString);
      setError("");
    } else {
      setConvertedDate("");
      setError(
        "Invalid date format. Please enter the date in the format DD/MM/YYYY."
      );
    }
  };

  return (
    <div>
      <p className="text-sm font-normal mb-2">Date</p>
      <div className="md:flex flex-row lg:w-2/5">
        <input
          type="text"
          value={inputDate}
          className="form-control block w-full px-4 py-1 mb-2 md:mb-0 md:mr-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded "
          placeholder="DD/MM/YYYY"
          onChange={(e) => setInputDate(e.target.value)}
        />
        <button
          type="submit"
          className="inline-block px-7 py-1 bg-red text-white font-medium text-sm leading-snug uppercase shadow-md"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={handleConvertClick}
        >
          Convert
        </button>
      </div>
      {error && <p className="text-sm font-normal mt-4 text-red">{error}</p>}
      {convertedDate && (
        <p className="text-sm font-normal mt-4 ">
          Converted Date: <span className="font-bold">{convertedDate}</span>
        </p>
      )}
    </div>
  );
}
