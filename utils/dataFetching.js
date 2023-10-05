import axios from "axios";

const url = "http://localhost:8000";
// const url = "https://enjoy-nissan-volt-inclusion.trycloudflare.com";

// getting news and announcements
export const getAnnouncements = async () => {
    try{
        const response = await axios.get(url + "/announcement");
        const data = response.data;
        return data || [];
    }catch (error) {
        console.error("Error fetching messages", error);
        return [];
    }
}

// fetching completed internship data
export  const getCompletedInternship = async () => {
  try {
      const response = await axios.get(url + "/completedInternships");
      const data = response.data;
      return data || [];
  }catch (error) {
      console.error("Error fetching Completed internships", error);
      return [];
  }
}

// get available internships data
export const getAvailableInternship = async () => {
    try {
          const response = await axios.get(url + "/availableInternships");
          const data = response.data;
          return data || [];
      }catch (error) {
          console.error("Error fetching Available internships", error);
          return [];
      }

}