import { expect } from 'chai';
import { connectDataConnectEmulator, executeQuery, getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMoviesRef } from '@firebasegen/default-connector';
import { deleteApp, initializeApp } from 'firebase/app';
import json from '../firebase-js-config.json' with { type: "json" };
describe('Basic executeQuery', () => {
    let dc;
    let app;
    beforeEach(() => {
        console.log(json);
        app = initializeApp(json);
        dc = getDataConnect(connectorConfig);
        connectDataConnectEmulator(dc, 'localhost', 9400);
    });
    afterEach(async () => {
        await deleteApp(app);
    });
    it('should run executeQuery with the latest code', async () => {
        const result = await executeQuery(listMoviesRef());
        expect(result.data).to.deep.eq({ movies: [] });
        console.log(result.data.movies); // Should be valid
    });
});
