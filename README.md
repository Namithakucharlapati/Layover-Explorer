# Layover Explorer — India flight edition

A responsive mini-trip planner built with plain HTML, CSS and JavaScript. This version focuses on **flight layovers only** and includes a searchable suggestion list of Indian airport cities, with airport names and IATA codes.

## Run the website
1. Download and extract `layover-explorer-india-flights.zip`.
2. Open the `layover-explorer` folder.
3. Double-click `index.html` to open it in Chrome, or open the folder in VS Code.
4. Search for a city, airport name or IATA code (for example, `HYD`). Choose a suggestion, set arrival/departure date and time, interests, and generate a plan.

No build tools or installation are required.

## What's included
- Flight layover mode only
- A broad India-wide airport-city list with state/UT, IATA code and airport name.
- Date fields, 24-hour time selectors, flight return buffer, interest filters and a sample itinerary.
- Named starter attractions for many popular airport cities, including specific beaches and coastal places in Visakhapatnam (RK Beach, Rushikonda Beach, Yarada Beach), plus city-specific heritage, food, market and nature ideas for cities such as Delhi, Mumbai, Chennai, Bengaluru, Goa, Jaipur, Kochi, Guwahati, Imphal and more.
- For airport cities without curated attractions yet, the planner clearly labels fallback ideas as map-search suggestions rather than pretending they are verified venues.

## Important limitations
Airport operations and scheduled passenger routes can change; some airports have limited, seasonal or no regular scheduled commercial flights. An airport being listed does not guarantee a direct flight or daily service. Confirm current routes and operations with airlines/airport sources. The airport-city list is a broad frontend reference, not a live flight database.

Attraction names are starter recommendations, but travel durations are rough sample estimates, not live routing. Map links, current traffic, opening hours, access rules, and flight schedules are not connected yet. Use a map to confirm distance from the selected airport and return time before visiting. The website does not connect to live maps, traffic, opening hours, flight schedules, or booking services. Always verify your airline's check-in/boarding cutoff, access rules, transport and return time before leaving the airport.

## Project files
- `index.html` — page structure and planner form
- `style.css` — responsive styling
- `script.js` — airport list, sample attraction data, time calculations and itinerary rendering

