import {createContext} from 'react';

const { Provider:NewsProvider,Consumer:NewsConsumer}=createContext();

export {NewsConsumer,NewsProvider};