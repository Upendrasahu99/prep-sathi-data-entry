import {databases, ID} from './appwriteConfig'



const subjectdata = [
  {subject: 'Mathematics'},
  {subject: 'English'},
  {subject: 'Science'},
  {subject: 'History'},
  {subject: 'Geography'},
]

// Add subjects
const addSubject = async () => {
  try {
    subjectdata.forEach(async (subject) => {
      console.log(subject);
      const promisData = await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID_SUBJECT,
        ID.unique(),
        subject
      );
      console.log(promisData);
    });
  } catch (error) {
    console.error('Error fetching subjects:', error);
  }
};
  
export { addSubject };