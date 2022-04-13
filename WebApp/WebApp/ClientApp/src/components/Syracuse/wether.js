import ReactWeather, { useOpenWeather } from 'react-open-weather';

// This component generates the weather data via a react weather api
export default function App (){
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '9dada905df54da75a8b18131faf94fb1',
        lat: '43.0481',
        lon: '-76.14274',
        lang: 'en',
        unit: 'imperial', // values are (metric, standard, imperial)
    });
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Syracuse"
            unitsLabels={{ temperature: 'F', windSpeed: 'mp/h' }}
            showForecast
            
        />
    );
};