/* istanbul ignore file */
import { initializeApp }  from './router';
import { getEntityManager } from './db/entityManager';

const app = initializeApp();
const entityManager = getEntityManager();
console.log('EM connection name', entityManager.connection.name);
app.listen(8080);
