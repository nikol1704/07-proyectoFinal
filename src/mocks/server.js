import { setupServer } from 'msw/native'
import { getHandlers } from './getHandlers'
 
export const server = setupServer(...getHandlers);
