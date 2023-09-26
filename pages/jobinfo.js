import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const JobInfoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch job information based on the job ID
      axios
        .post(`https://mydryve.co/Api/getJobById`, { id })
        .then((response) => {
          const allNotes = response.data.payload.payload;
          setInfo(allNotes["0"]);
        })
        .catch((error) => console.log(`Error: ${error}`));
    }
  }, [id]);

  return (
    <div>
      {info && (
        <>
          <h1>{info.title}</h1>
          <p>{info.description}</p>
          {/* Display other job information */}
        </>
      )}
    </div>
  );
};

export default JobInfoPage;
