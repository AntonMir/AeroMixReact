import React from 'react'
// styles
import "./map.scss"

export default function Map(props) {

    return (
        <iframe 
            className="google-map" 
            title="googte-maps" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.3155072149725!2d37.454522569344164!3d55.909229509580676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b539036975ad6b%3A0xcc0186af2345ac1d!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCT0YDRg9GI0LjQvdCwLCA4!5e0!3m2!1sru!2sru!4v1614150754410!5m2!1sru!2sru" 
            loading="lazy"
        />
	)
}