import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';  

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card 
                    src="https://media.cntraveler.com/photos/60391f939a0d71adf491d2cd/16:9/w_2560%2Cc_limit/TheUnderlineMiami-2021-RobinHill-2-2.jpg"
                    title="Metrorail Train Tracks"
                    description="The first phase of The Underline, a 10-mile linear park, has opened in the Brickell neighborhood."
                />
                <Card 
                    src="https://media.cntraveler.com/photos/5c953759aeed58504c3b0e2e/16:9/w_2560%2Cc_limit/Hotel-Brach-Paris_2019_Brach_Facade_3_YannAudic.jpg"
                    title="Brach"
                    description="Upfront homegrown arrival shaking up the city’s straitlaced 16th arrondissement—with a destination restaurant and head-turning Philippe Starck design.
                    READERS' CHOICE AWARDS 2019"
                />
                <Card 
                    src="https://media.cntraveler.com/photos/5c8be236ff547530462175d1/16:9/w_2560%2Cc_limit/Grands-Boulevard_2019_%2525C2%2525A9Karel_Balas_GD_BLVD_0001.jpg"
                    title="Hotel des Grands Boulevards"
                    description="The latest from the Experimental Cocktail Group: an artfully designed 18th-century townhouse right in the center of the city."
                />
            </div>
            <div className='home__section'>
                <Card 
                    src="https://media.cntraveler.com/photos/5c95375920c9d4b62e3a28fc/16:9/w_2560%2Cc_limit/Hotel-Lutetia_2019_Hotel-Lutetia---Akasha-Spa-pool-raspail-view.jpg"
                    title="Hootel Lutetia"
                    description="The comeback act of the decade: a fabulous Art Deco grande dame that’s had a super-chic makeover."
                    price="$130/night"
                />
                <Card 
                    src="https://media.cntraveler.com/photos/5d03ab509d8c2076498d9d7b/16:9/w_2560%2Cc_limit/Hotel-Bowmann_2019_Terrasse-suite-Bowmann.jpg"
                    title="Hotel Bowmann"
                    description="This newcomer to the Paris hotel scene in the 8th arrondissement is a feast for the eyes in a comfortable, sensuous setting."
                    price="$230/night"
                />
                <Card 
                    src="https://media.cntraveler.com/photos/59f3a7afd2b9967ad8d2c658/16:9/w_2560%2Cc_limit/LivingRoom-HotelCafeRoyal-London-CRHotel.jpg"
                    title="Hotel Café Royal"
                    description="Stay in the same five-star Piccadilly digs that have played host to Oscar Wilde, Winston Churchill, and David Bowie."
                    price="$170/night"
                />
            </div>
        </div>
    )
}

export default Home