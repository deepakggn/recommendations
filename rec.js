const ContentBasedRecommender = require('content-based-recommender')
const recommender = new ContentBasedRecommender({
  minScore: 0.1,
  maxSimilarDocuments: 10
});
 
// prepare documents data
const documents = [
  //add your search criteria in the id 0 below
  //( You can use something like "ottawa" or "software developer" or "doctors in Toronto")
  { id: '0', content: 'nurse'},
  { id: '1000001', content: 'Senior Software Developer in Montreal'},
  { id: '1000002', content: 'Doctor in Ottawa' },
  { id: '1000003', content: 'Software Developer in Ottawa' },
  { id: '1000004', content: 'Nurse in Toronto' },
  { id: '1000005', content: 'Software Developer in Montreal who has a doctor friend' },
  { id: '1000006', content: 'Software Tester in Waterloo' },
  { id: '1000007', content: 'Senior Doctor in Montreal' },
  { id: '1000008', content: 'Doctor using software in day today life' },
  { id: '1000009', content: 'Nurse working with a senior doctor in Toronto' }
];
// start training
recommender.train(documents);
 
//get top 10 similar items to document 0
const similarDocuments = recommender.getSimilarDocuments('0', 0, 10);
/*
  the higher the score, the more similar the item is
  documents with score < 0.1 are filtered because options minScore is set to 0.1
*/
console.log(similarDocuments);