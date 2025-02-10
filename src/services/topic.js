import {databases, ID} from './appwriteConfig'

const topics = [
  {
    topic: 'olericulture(vegitable  science )',
    subjects: ['67a1037c000414fc5b03']
  },
  {
    topic: 'floriculture(flower science)',
    subjects: ['67a1037c000414fc5b03']
  },
]

const addTopic = async () => { 
  try {
    topics.forEach(async (topic) => {
      console.log(topic);
      const promisData = await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID_TOPIC,
        ID.unique(),
        topic
      );
      console.log(promisData);
    });
  } catch (error) {
    console.error('Error fetching topics:', error);
  }
}

export { addTopic };