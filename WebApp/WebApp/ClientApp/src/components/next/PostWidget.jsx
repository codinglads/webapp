import React from 'react'
import moment from 'moment';
import Link from 'next/link';

//we would need to make more of these from weatherwidget.io and add them to location in graphCMS and make a querey to get this 
const weatherHTML = '<div id = "weather" style = "width:315px;"> <a class="weatherwidget-io" href="https://forecast7.com/en/43d05n76d15/syracuse/?unit=us" data-label_1="SYRACUSE" data-label_2="WEATHER" data-theme="weather_one" >SYRACUSE WEATHER</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://weatherwidget.io/js/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","weatherwidget-io-js");</script></div></body></html>'

const PostWidget = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Weather
            </h3>
            <div className="text-center">
                <div
                    dangerouslySetInnerHTML={{ __html: weatherHTML }}
                />
            </div>

        </div>
    )
}

export default PostWidget