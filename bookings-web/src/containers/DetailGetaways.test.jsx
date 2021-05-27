require('dotenv').config(); 
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockPlace from '../fixtures/mockPlace.json';
import { MemoryRouter, Route } from 'react-router-dom';
import DetailGetaways from './DetailGetaways';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places/6092e208e9e24bf5b66a86bd', (req, res, ctx) => {
        return res(ctx.json(mockPlace));
    })
)

describe('DetailGetaways container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('Renders a getaway detail to the page', async () => {
        render(
            <MemoryRouter initialEntries={['/6092e208e9e24bf5b66a86bd']}>
                <Route path="/:id">
                    <DetailGetaways />
                </Route>
            </MemoryRouter>
        );

        screen.getByAltText('Loading');

        return waitFor(() => {
            screen.getByAltText('destination');
            screen.getByText('Motel', { exact: false });
        });
    })
})