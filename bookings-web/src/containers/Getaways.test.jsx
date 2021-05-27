require('dotenv').config(); 
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockPlaces from '../fixtures/mockPlaces.json';
import { MemoryRouter } from 'react-router-dom';
import Getaways from './Getaways';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places', (req, res, ctx) => {
        return res(ctx.json(mockPlaces));
    })
)

describe('Getaways container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('Renders a list of getaways to the page', async () => {
        render(
        <MemoryRouter>
            <Getaways />
        </MemoryRouter>
            );

        screen.getByAltText('Loading');

        const div = await screen.findByLabelText('placeList');
        expect(div).not.toBeEmptyDOMElement();
        expect(div).toMatchSnapshot();
    });
})
