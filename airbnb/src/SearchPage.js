import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import { Button } from '@material-ui/core';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className='searchPage__info'>
                <p>62 stays · 26 agust to 30 agust · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button varinat="outlined">Cancllation Flexibility</Button>
                <Button varinat="outlined">Type of place</Button>
                <Button varinat="outlined">Price</Button>
                <Button varinat="outlined">Rooms and beds</Button>
                <Button varinat="outlined">More</Button>
            </div>
            <SearchResult 
                img="https://media.cntraveler.com/photos/60391f939a0d71adf491d2cd/16:9/w_2560%2Cc_limit/TheUnderlineMiami-2021-RobinHill-2-2.jpg"
                location="Private room in center of Paris"
                title="Metrorail Train Tracks"
                description="The first phase of The Underline, a 10-mile linear park, has opened in the Brickell neighborhood."
                star={4.73}
                price="$170/night"
                total="$340/night"
            />
            <SearchResult 
                img="https://media.cntraveler.com/photos/60391f939a0d71adf491d2cd/16:9/w_2560%2Cc_limit/TheUnderlineMiami-2021-RobinHill-2-2.jpg"
                location="Private room in center of Paris"
                title="Metrorail Train Tracks"
                description="The first phase of The Underline, a 10-mile linear park, has opened in the Brickell neighborhood."
                star={4.73}
                price="$170/night"
                total="$340/night"
            />
        </div>
    )
}

export default SearchPage