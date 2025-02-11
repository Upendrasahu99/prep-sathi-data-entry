import {databases, ID} from './appwriteConfig'

const topics = [
  "general horticulture",
  "olericulture (vegetable science)",
  "floriculture (flower science)",
  "pomology (fruit science)",
  "aromatic plants study",
  "ornamental plants study",
  "post harvest technology",
  "spice crops study",
  "plantation crops study",
  "protected cultivation",
  "vegetable processing"
]
const subjectId =  '67aa3d63001bc932c355';

const addTopic = async () => { 
  try {
    topics.forEach(async (topic) => {
      console.log(topic);
      const promisData = await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID_TOPIC,
        ID.unique(),
        {
          topic: topic,
          subjects: subjectId
        }
      );
      console.log(promisData);
    });
  } catch (error) {
    console.error('Error fetching topics:', error);
  }
}

export { addTopic };